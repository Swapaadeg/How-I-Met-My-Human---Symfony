<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class AssociationJoinRequestType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('message', TextareaType::class, [
                'label' => 'Message de présentation',
                'help' => 'Présentez-vous brièvement et expliquez pourquoi vous souhaitez rejoindre cette association',
                'attr' => [
                    'rows' => 6,
                    'placeholder' => 'Bonjour, je m\'appelle... et j\'aimerai rejoindre votre association car...',
                    'class' => 'form-control'
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez écrire un message de présentation',
                    ]),
                    new Length([
                        'min' => 10,
                        'minMessage' => 'Votre message doit faire au moins {{ limit }} caractères',
                        'max' => 1000,
                        'maxMessage' => 'Votre message ne doit pas dépasser {{ limit }} caractères',
                    ]),
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => null,
        ]);
    }
}
