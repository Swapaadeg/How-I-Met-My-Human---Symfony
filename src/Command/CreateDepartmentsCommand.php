<?php

namespace App\Command;

use App\Entity\Department;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:create-departments',
    description: 'Créer tous les départements français en base de données',
)]
class CreateDepartmentsCommand extends Command
{
    public function __construct(
        private EntityManagerInterface $entityManager
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        
        $departments = [
            // Départements métropolitains
            ['01', 'Ain'],
            ['02', 'Aisne'],
            ['03', 'Allier'],
            ['04', 'Alpes-de-Haute-Provence'],
            ['05', 'Hautes-Alpes'],
            ['06', 'Alpes-Maritimes'],
            ['07', 'Ardèche'],
            ['08', 'Ardennes'],
            ['09', 'Ariège'],
            ['10', 'Aube'],
            ['11', 'Aude'],
            ['12', 'Aveyron'],
            ['13', 'Bouches-du-Rhône'],
            ['14', 'Calvados'],
            ['15', 'Cantal'],
            ['16', 'Charente'],
            ['17', 'Charente-Maritime'],
            ['18', 'Cher'],
            ['19', 'Corrèze'],
            ['21', 'Côte-d\'Or'],
            ['22', 'Côtes-d\'Armor'],
            ['23', 'Creuse'],
            ['24', 'Dordogne'],
            ['25', 'Doubs'],
            ['26', 'Drôme'],
            ['27', 'Eure'],
            ['28', 'Eure-et-Loir'],
            ['29', 'Finistère'],
            ['30', 'Gard'],
            ['31', 'Haute-Garonne'],
            ['32', 'Gers'],
            ['33', 'Gironde'],
            ['34', 'Hérault'],
            ['35', 'Ille-et-Vilaine'],
            ['36', 'Indre'],
            ['37', 'Indre-et-Loire'],
            ['38', 'Isère'],
            ['39', 'Jura'],
            ['40', 'Landes'],
            ['41', 'Loir-et-Cher'],
            ['42', 'Loire'],
            ['43', 'Haute-Loire'],
            ['44', 'Loire-Atlantique'],
            ['45', 'Loiret'],
            ['46', 'Lot'],
            ['47', 'Lot-et-Garonne'],
            ['48', 'Lozère'],
            ['49', 'Maine-et-Loire'],
            ['50', 'Manche'],
            ['51', 'Marne'],
            ['52', 'Haute-Marne'],
            ['53', 'Mayenne'],
            ['54', 'Meurthe-et-Moselle'],
            ['55', 'Meuse'],
            ['56', 'Morbihan'],
            ['57', 'Moselle'],
            ['58', 'Nièvre'],
            ['59', 'Nord'],
            ['60', 'Oise'],
            ['61', 'Orne'],
            ['62', 'Pas-de-Calais'],
            ['63', 'Puy-de-Dôme'],
            ['64', 'Pyrénées-Atlantiques'],
            ['65', 'Hautes-Pyrénées'],
            ['66', 'Pyrénées-Orientales'],
            ['67', 'Bas-Rhin'],
            ['68', 'Haut-Rhin'],
            ['69', 'Rhône'],
            ['70', 'Haute-Saône'],
            ['71', 'Saône-et-Loire'],
            ['72', 'Sarthe'],
            ['73', 'Savoie'],
            ['74', 'Haute-Savoie'],
            ['75', 'Paris'],
            ['76', 'Seine-Maritime'],
            ['77', 'Seine-et-Marne'],
            ['78', 'Yvelines'],
            ['79', 'Deux-Sèvres'],
            ['80', 'Somme'],
            ['81', 'Tarn'],
            ['82', 'Tarn-et-Garonne'],
            ['83', 'Var'],
            ['84', 'Vaucluse'],
            ['85', 'Vendée'],
            ['86', 'Vienne'],
            ['87', 'Haute-Vienne'],
            ['88', 'Vosges'],
            ['89', 'Yonne'],
            ['90', 'Territoire de Belfort'],
            ['91', 'Essonne'],
            ['92', 'Hauts-de-Seine'],
            ['93', 'Seine-Saint-Denis'],
            ['94', 'Val-de-Marne'],
            ['95', 'Val-d\'Oise'],
            
            // Départements d'outre-mer
            ['971', 'Guadeloupe'],
            ['972', 'Martinique'],
            ['973', 'Guyane'],
            ['974', 'La Réunion'],
            ['976', 'Mayotte'],
            
            // Collectivités d'outre-mer (codes spéciaux)
            ['975', 'Saint-Pierre-et-Miquelon'],
            ['977', 'Saint-Barthélemy'],
            ['978', 'Saint-Martin'],
            ['984', 'Terres australes et antarctiques françaises'],
            ['986', 'Wallis-et-Futuna'],
            ['987', 'Polynésie française'],
            ['988', 'Nouvelle-Calédonie'],
        ];

        $io->title('Création des départements français');
        
        // Vérifier s'il y a déjà des départements en base
        $existingCount = $this->entityManager->getRepository(Department::class)->count([]);
        if ($existingCount > 0) {
            if (!$io->confirm("Il y a déjà $existingCount département(s) en base. Voulez-vous continuer et ajouter les départements manquants ?")) {
                $io->info('Opération annulée.');
                return Command::SUCCESS;
            }
        }

        $created = 0;
        $skipped = 0;

        $io->progressStart(count($departments));

        foreach ($departments as [$code, $name]) {
            // Vérifier si le département existe déjà
            $existing = $this->entityManager->getRepository(Department::class)->findOneBy(['code' => (int)$code]);
            
            if ($existing) {
                $skipped++;
                $io->progressAdvance();
                continue;
            }

            $department = new Department();
            $department->setCode((int)$code);
            $department->setName($name);
            
            $this->entityManager->persist($department);
            $created++;
            
            $io->progressAdvance();
        }

        $this->entityManager->flush();
        $io->progressFinish();

        $io->success([
            "Opération terminée !",
            "Départements créés : $created",
            "Départements ignorés (déjà existants) : $skipped",
            "Total en base : " . $this->entityManager->getRepository(Department::class)->count([])
        ]);

        return Command::SUCCESS;
    }
}