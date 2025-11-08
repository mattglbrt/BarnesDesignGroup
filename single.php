<?php
/**
 * Template Name: Single Post
 * Description: The template for displaying single posts
 */

$context = Timber::context();

$context['content'] = Timber::compile_string($context['post']->content, $context);

Timber::render('single.twig', $context);
