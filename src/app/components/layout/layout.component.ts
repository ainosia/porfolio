import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare let $:any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: []
})
export class LayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    $(window).on('scroll', scrollEffects);

    let nivelIntro, isSticky = false, profundidad;

    $(document).ready(function() {
        // sistema de desplazamiento vertical
        $('.desplazar').on('click', navegar);

        // cálculo de profundidades objetivo
    	  nivelIntro = $('.stick').offset().top - $('.menu').innerHeight();
    });


    function scrollEffects() {
    	profundidad = $(window).scrollTop();
    	$('.reveal').each(function() {
    		if (profundidad >= $(this).offset().top - $(window).innerHeight() / 2) {
    			let objReveal = $(this);
    			setTimeout(function() {
    				objReveal.addClass('visible');
    		}, $(this).data('delay') );
    	}
    });


    // Menú "sticky"
    if (nivelIntro <= profundidad) {
    	  if (!isSticky) {
          fixMenu(true);
    		}
      } else {
        if (isSticky) {
          fixMenu(false);
        }
      }
    }


    function fixMenu(fix) {
    	if (fix) {
        $('.menu').css({position: 'fixed', top: 0, left: 0});
        $('#proyectos').css({ marginTop: $('.menu').innerHeight() });
    	  isSticky = true;
    	} else {
        $('.menu').css('position', 'static');
        $('#proyectos').css({ marginTop: 0 });
        isSticky = false;
    	}
    }


    function navegar(e) {
      e.preventDefault();
    	let profundidad = $( $(this).data('nivel') ).offset().top;
    	let distanciaAbs = Math.abs( $(window).scrollTop() - profundidad );
    	$('body, html').animate({
    		scrollTop: profundidad
    	}, distanciaAbs * .4);
    }


    // $(document).ready(function () {
    //   $(document).on("scroll");
    //
    //   // Enlaces activos
    //   $('.menu ul li a').on('click', function (e) {
    //     e.preventDefault();
    //     $(document).off("scroll");
    //
    //     $('.menu ul li a').each(function () {
    //         $(this).removeClass('tab_active');
    //     })
    //     $(this).addClass('tab_active');
    //   });
    // });


    //Menú responsive
    $(document).ready(function() {
      $('.menu-trigger').click(function() {
        $('nav ul').slideToggle(768);
        $('nav ul').css({ position: 'fixed' });
      });

      $('nav ul li').click(function() {
        if ($(window).width() < 768) {
          $('nav ul').css('display', 'none');
        }
      });

      $(window).resize(function() {
    		if (  $(window).width() >= 768 ) {
    			$('nav ul').css('display', 'none');
    		 }
    	});
    });
  }
}
