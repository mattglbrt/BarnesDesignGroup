<?php
/**
 * Template Name: Page
 * Description: The template for displaying pages
 */

$context = Timber::context();

$context['content'] = Timber::compile_string($context['post']->content, $context);

Timber::render('page.twig', $context);
