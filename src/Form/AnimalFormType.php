<?php

namespace App\Form;

use App\Entity\Animals;
use App\Entity\Species;
use App\Entity\Tags;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;

class AnimalFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'Nom de l\'animal',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Ex: Médor'
                ]
            ])
            ->add('age', TextType::class, [
                'label' => 'Âge',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Ex: 2 ans'
                ]
            ])
            ->add('sexe', ChoiceType::class, [
                'label' => 'Sexe',
                'choices' => [
                    'Mâle' => 'male',
                    'Femelle' => 'femelle',
                ],
                'attr' => [
                    'class' => 'form-control'
                ]
            ])
            ->add('description', TextareaType::class, [
                'label' => 'Description',
                'attr' => [
                    'class' => 'form-control',
                    'rows' => 5,
                    'placeholder' => 'Décrivez le caractère, l\'histoire de l\'animal...'
                ]
            ])
            ->add('date_arrivee', DateType::class, [
                'label' => 'Date d\'arrivée',
                'widget' => 'single_text',
                'attr' => [
                    'class' => 'form-control'
                ]
            ])
            ->add('imageFile', FileType::class, [
                'label' => 'Photo de l\'animal',
                'required' => false,
                'constraints' => [
                    new File([
                        'maxSize' => '5M',
                        'mimeTypes' => [
                            'image/jpeg',
                            'image/png',
                            'image/webp',
                        ],
                        'mimeTypesMessage' => 'Veuillez uploader une image valide (JPEG, PNG, WebP)',
                    ])
                ],
                'attr' => [
                    'class' => 'form-control'
                ]
            ])
            ->add('species', EntityType::class, [
                'class' => Species::class,
                'choice_label' => 'name',
                'label' => 'Espèce',
                'placeholder' => 'Choisir une espèce',
                'attr' => [
                    'class' => 'form-control'
                ]
            ])
            ->add('tag', EntityType::class, [
                'class' => Tags::class,
                'choice_label' => 'type',
                'label' => 'Tags',
                'multiple' => true,
                'expanded' => true,
                'required' => false,
                'attr' => [
                    'class' => 'tags-input'
                ]
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'Ajouter l\'animal',
                'attr' => [
                    'class' => 'btn btn-primary'
                ]
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Animals::class,
        ]);
    }
}