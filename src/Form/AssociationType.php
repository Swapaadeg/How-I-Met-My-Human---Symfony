<?php

namespace App\Form;

use App\Entity\Association;
use App\Entity\Department;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Range;
use Vich\UploaderBundle\Form\Type\VichImageType;

class AssociationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'Nom de l\'association',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Ex: SPA de Marseille'
                ],
                'constraints' => [
                    new NotBlank(message: 'Le nom est obligatoire')
                ]
            ])
            ->add('description', TextareaType::class, [
                'label' => 'Description',
                'attr' => [
                    'class' => 'form-control',
                    'rows' => 5,
                    'placeholder' => 'Décrivez votre association, sa mission, ses valeurs...'
                ],
                'constraints' => [
                    new NotBlank(message: 'La description est obligatoire')
                ]
            ])
            ->add('code_postal', IntegerType::class, [
                'label' => 'Code postal',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => '13000'
                ],
                'constraints' => [
                    new NotBlank(message: 'Le code postal est obligatoire'),
                    new Range(
                        min: 1000,
                        max: 99999,
                        notInRangeMessage: 'Le code postal doit être entre {{ min }} et {{ max }}'
                    )
                ]
            ])
            ->add('contact_email', EmailType::class, [
                'label' => 'Email de contact',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'contact@association.fr'
                ],
                'constraints' => [
                    new NotBlank(message: 'L\'email de contact est obligatoire'),
                    new Email(message: 'Veuillez saisir un email valide')
                ]
            ])
            ->add('department', EntityType::class, [
                'class' => Department::class,
                'choice_label' => function(Department $department) {
                    return $department->getCode() . ' - ' . $department->getName();
                },
                'label' => 'Département',
                'attr' => [
                    'class' => 'form-select'
                ],
                'placeholder' => 'Sélectionnez un département',
                'required' => false
            ])
            ->add('imageFile', VichImageType::class, [
                'label' => 'Image de l\'association',
                'required' => false,
                'allow_delete' => true,
                'delete_label' => 'Supprimer l\'image',
                'download_uri' => false,
                'image_uri' => true,
                'attr' => [
                    'class' => 'form-control'
                ]
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Association::class,
        ]);
    }
}