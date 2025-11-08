<?php
/**
 * Template Name: Front Page
 * Description: The front page template file
 */

$context = Timber::context();

$context['content'] = Timber::compile_string($context['post']->content, $context);

Timber::render('front-page.twig', $context);
