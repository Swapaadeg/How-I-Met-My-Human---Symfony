<?php

namespace App\Controller\Admin;

use App\Entity\Animals;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class AnimalsCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Animals::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Animal')
            ->setEntityLabelInPlural('Animaux')
            ->setSearchFields(['id', 'name', 'description'])
            ->setDefaultSort(['id' => 'DESC']);
    }

    public function configureFields(string $pageName): iterable
    {
        yield IdField::new('id')->hideOnForm();
        yield TextField::new('name', 'Nom');
        yield AssociationField::new('species', 'Espèce');
        yield ChoiceField::new('sexe', 'Sexe')
            ->setChoices([
                'Mâle' => 'male',
                'Femelle' => 'female',
            ]);
        yield TextField::new('age', 'Âge');
        yield TextareaField::new('description', 'Description')
            ->hideOnIndex();
        yield AssociationField::new('association', 'Association');
        yield AssociationField::new('tag', 'Tags')
            ->hideOnIndex();
        yield ImageField::new('imageName', 'Photo')
            ->setBasePath('/uploads/images')
            ->setUploadDir('public/uploads/images')
            ->hideOnForm();
        yield DateField::new('date_arrivee', 'Date d\'arrivée');
    }
}
