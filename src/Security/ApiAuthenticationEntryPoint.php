<?php

namespace App\Security;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Http\EntryPoint\AuthenticationEntryPointInterface;

class ApiAuthenticationEntryPoint implements AuthenticationEntryPointInterface
{
    public function start(Request $request, ?AuthenticationException $authException = null): Response
    {
        // Si la requête est une requête AJAX/API (commence par /api/)
        if (str_starts_with($request->getPathInfo(), '/api/')) {
            return new JsonResponse([
                'success' => false,
                'message' => 'Vous devez être connecté pour ajouter un animal en favoris'
            ], Response::HTTP_UNAUTHORIZED);
        }

        // Sinon, redirection vers la page de connexion
        return new JsonResponse([
            'success' => false,
            'message' => 'Authentification requise'
        ], Response::HTTP_UNAUTHORIZED);
    }
}
