<?php

namespace App\Controller\Admin;

use App\Entity\Association;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\UrlField;

class AssociationCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Association::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Association')
            ->setEntityLabelInPlural('Associations')
            ->setSearchFields(['id', 'name', 'email'])
            ->setDefaultSort(['name' => 'ASC']);
    }

    public function configureFields(string $pageName): iterable
    {
        yield IdField::new('id')->hideOnForm();
        yield TextField::new('name', 'Nom');
        yield EmailField::new('email', 'Email');
        yield TextField::new('phone', 'Téléphone');
        yield TextareaField::new('address', 'Adresse')->hideOnIndex();
        yield AssociationField::new('department', 'Département');
        yield TextareaField::new('description', 'Description')->hideOnIndex();
        yield UrlField::new('website', 'Site web')->hideOnIndex();
        yield ImageField::new('logoName', 'Logo')
            ->setBasePath('/uploads/images')
            ->setUploadDir('public/uploads/images')
            ->hideOnForm();
    }
}
