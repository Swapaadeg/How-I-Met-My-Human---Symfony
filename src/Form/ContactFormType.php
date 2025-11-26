<?php

namespace App\Form;

use App\Entity\Association;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;

class ContactFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'Votre nom',
                'attr' => [
                    'placeholder' => 'Entrez votre nom complet',
                    'class' => 'form-control'
                ],
                'constraints' => [
                    new Assert\NotBlank(['message' => 'Veuillez entrer votre nom']),
                    new Assert\Length([
                        'min' => 2,
                        'max' => 100,
                        'minMessage' => 'Le nom doit contenir au moins {{ limit }} caractères',
                        'maxMessage' => 'Le nom ne peut pas dépasser {{ limit }} caractères'
                    ])
                ]
            ])
            ->add('email', EmailType::class, [
                'label' => 'Votre email',
                'attr' => [
                    'placeholder' => 'votre.email@exemple.com',
                    'class' => 'form-control'
                ],
                'constraints' => [
                    new Assert\NotBlank(['message' => 'Veuillez entrer votre email']),
                    new Assert\Email(['message' => 'L\'adresse email n\'est pas valide'])
                ]
            ])
            ->add('phone', TextType::class, [
                'label' => 'Votre téléphone (optionnel)',
                'required' => false,
                'attr' => [
                    'placeholder' => '06 12 34 56 78',
                    'class' => 'form-control'
                ],
                'constraints' => [
                    new Assert\Regex([
                        'pattern' => '/^[0-9\s\-\+\(\)\.]+$/',
                        'message' => 'Le numéro de téléphone n\'est pas valide'
                    ])
                ]
            ])
            ->add('association', EntityType::class, [
                'class' => Association::class,
                'choice_label' => 'name',
                'label' => 'Association à contacter',
                'placeholder' => 'Sélectionnez une association',
                'attr' => [
                    'class' => 'form-control'
                ],
                'constraints' => [
                    new Assert\NotBlank(['message' => 'Veuillez sélectionner une association'])
                ]
            ])
            ->add('subject', TextType::class, [
                'label' => 'Objet du message',
                'attr' => [
                    'placeholder' => 'Ex: Demande d\'adoption, Question sur un animal...',
                    'class' => 'form-control'
                ],
                'constraints' => [
                    new Assert\NotBlank(['message' => 'Veuillez entrer l\'objet de votre message']),
                    new Assert\Length([
                        'min' => 5,
                        'max' => 150,
                        'minMessage' => 'L\'objet doit contenir au moins {{ limit }} caractères',
                        'maxMessage' => 'L\'objet ne peut pas dépasser {{ limit }} caractères'
                    ])
                ]
            ])
            ->add('message', TextareaType::class, [
                'label' => 'Votre message',
                'attr' => [
                    'placeholder' => 'Décrivez votre demande en détail...',
                    'class' => 'form-control',
                    'rows' => 8
                ],
                'constraints' => [
                    new Assert\NotBlank(['message' => 'Veuillez entrer votre message']),
                    new Assert\Length([
                        'min' => 20,
                        'max' => 2000,
                        'minMessage' => 'Le message doit contenir au moins {{ limit }} caractères',
                        'maxMessage' => 'Le message ne peut pas dépasser {{ limit }} caractères'
                    ])
                ]
            ])
            ->add('notRobot', CheckboxType::class, [
                'label' => 'Je ne suis pas un robot',
                'mapped' => false,
                'attr' => [
                    'class' => 'form-check-input'
                ],
                'constraints' => [
                    new Assert\IsTrue(['message' => 'Veuillez cocher cette case pour confirmer que vous n\'êtes pas un robot'])
                ]
            ])
            // Honeypot - champ piège invisible pour les bots
            ->add('website', TextType::class, [
                'label' => false,
                'required' => false,
                'mapped' => false,
                'attr' => [
                    'class' => 'honeypot-field',
                    'tabindex' => '-1',
                    'autocomplete' => 'off'
                ]
            ])
            // Timestamp pour vérifier que le formulaire n'est pas soumis trop rapidement
            ->add('formTimestamp', HiddenType::class, [
                'mapped' => false,
                'data' => (string) time()
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'csrf_protection' => true,
            'csrf_field_name' => '_token',
            'csrf_token_id'   => 'contact_form',
        ]);
    }
}
