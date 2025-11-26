<?php

namespace App\Controller\Admin;

use App\Entity\AdopterNews;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;

class AdopterNewsCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return AdopterNews::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Nouvelle')
            ->setEntityLabelInPlural('Nouvelles des adoptants')
            ->setSearchFields(['id', 'content'])
            ->setDefaultSort(['createdAt' => 'DESC']);
    }

    public function configureFields(string $pageName): iterable
    {
        yield IdField::new('id')->hideOnForm();
        yield AssociationField::new('user', 'Utilisateur');
        yield TextareaField::new('content', 'Contenu');
        yield ImageField::new('imageName', 'Photo')
            ->setBasePath('/uploads/adopter_news_images')
            ->setUploadDir('public/uploads/adopter_news_images')
            ->hideOnForm();
        yield DateTimeField::new('createdAt', 'Date de création')->hideOnForm();
    }
}
