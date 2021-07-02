//down 카운팅번호
let number = 0;
let trigger = 0;

let page_one_up = 0;

new fullpage('#fullpage', {
    autoScrolling: true,
    scrollHorizontally: true,

    onLeave: function (origin, destination, direction) {
        var leavingSection = this;

        //첫페이지
        if (origin.index == 0 && (direction == 'down' || direction == 'up')) {
            let flag;
            if (number == -1 || number == 0) {
                trigger = 0;
                number = 0;
            } else if (number == 2) {
                trigger = 2;
            } else if (number == 30) {
                trigger = 1;
            }


            if (trigger == 0 && direction == 'down' || direction == 'up') {
                number++;
                flag = false;
                return flag;
            } else if (trigger == 2 && direction == 'down' || direction == 'up') {
                $("#map").fadeIn(1000);
                $("#tx1").delay(500).fadeIn(1000).delay(1000).fadeOut(500);
                $("#tx2").delay(3000).fadeIn(1000).delay(1000).fadeOut(500);
                $("#tx3").delay(5500).fadeIn(1000).delay(1000);

                number++;
                trigger = 0;
                flag = false;
                return flag;
            } else if (trigger == 1) {
                $('#tx1').fadeOut(0);
                $('#tx2').fadeOut(0);
                number = -1;
                flag = true;
                return flag;
            }


        } else if (origin.index == 1 && (direction == 'down' || direction == 'up')) { //조로 //origin.index랑 같이 붙은 direction은 destination으로 바뀔거같음
            let flag;

            if (number == 17) {
                trigger = 1;
            } else if (number == 7) {
                trigger = 2;
            } else if (number == 3) {
                trigger = 3;
            } else if (number == -1) {
                trigger = 0;
                number = 0;
            }

            if (trigger == 0 && (direction == 'down' || direction == 'up')) {
                number++;
                flag = false;
                return flag;
            } else if (trigger == 3 && (direction == 'down' || direction == 'up')) {
                $('#zoro').show();
                number++;
                flag = false;
                return flag;
            } else if (trigger == 2 && (direction == 'down' || direction == 'up')) {
                $('#zoro-text1').show();
                $('#zoro-text2').delay(500).fadeIn(1000);
                number++;
                flag = false;
                return flag;
            } else if (trigger == 1 && (direction == 'down')) {
                flag = true;
                number = -1;
                $('#zoro').hide();
                $('#zoro-text1').hide();
                $('#zoro-text2').fadeOut(0);
                $('.zoro').removeClass('animate__animated animate__fadeInUpBig');
                $('.zoro-text1').removeClass('animate__animated animate__fadeInRight');
                $('.zoro').addClass('animate__animated animate__fadeInUpBig');
                $('.zoro-text1').addClass('animate__animated animate__fadeInRight');
                return flag;
            }else if (trigger == 1 && (direction == 'up')) {
                flag = true;
                number = 30;
                trigger = 1;
                $('#zoro').hide();
                $('#zoro-text1').hide();
                $('#zoro-text2').fadeOut(0);
                $('.zoro').removeClass('animate__animated animate__fadeInUpBig');
                $('.zoro-text1').removeClass('animate__animated animate__fadeInRight');
                $('.zoro').addClass('animate__animated animate__fadeInUpBig');
                $('.zoro-text1').addClass('animate__animated animate__fadeInRight');
                return flag;
            }
        } else if (origin.index == 2 && (direction == 'down' || direction == 'up')) { //쵸파
            let flag;
            if (number == 17) {
                trigger = 1;
            } else if (number == 10) {
                trigger = 2;
            }else if (number == 7) {
                trigger = 3;
            } else if (number == 3) {
                trigger = 4;
            } else if (number == -1) {
                trigger = 0;
                number = 0;
            }

            if (trigger == 0 && (direction == 'down' || direction == 'up')) {
                number++;
                flag = false;
                return flag;
            } else if (trigger == 4 && (direction == 'down' || direction == 'up')) {
                $('#chopper').show();
                number++;
                flag = false;
                return flag;
            } else if (trigger == 3 && (direction == 'down' || direction == 'up')) {
                $('#chopper-text1').show();
                number++;
                flag = false;
                return flag;
            }else if (trigger == 2 && (direction == 'down' || direction == 'up')) {
                $('#chopper-text2').show();
                number++;
                flag = false;
                return flag;
            } else if (trigger == 1 && (direction == 'down' || direction == 'up')) {
                flag = true;
                number = -1;
                $('#chopper').hide();
                $('#chopper-text1').hide();
                $('#chopper-text2').hide();
                $('.chopper').removeClass('animate__animated animate__fadeInUpBig');
                $('.chopper-text1').removeClass('animate__animated animate__fadeInRight');
                $('.chopper-text2').removeClass('animate__animated animate__fadeInRight');
                $('.chopper').addClass('animate__animated animate__fadeInUpBig');
                $('.chopper-text1').addClass('animate__animated animate__fadeInRight');
                $('.chopper-text2').addClass('animate__animated animate__fadeInRight');
                console.log(number + 'number ! ');
                return flag;
            }
        } else if (origin.index == 3 && (direction == 'down' || direction == 'up')) { //상디
            let flag;
            if (number == 17) {
                trigger = 1;
            } else if (number == 10) {
                trigger = 2;
            } else if (number == 7) {
                trigger = 3;
            }else if (number == 3) {
                trigger = 4;
            } else if (number == -1) {
                trigger = 0;
                number = 0;
            }

            if (trigger == 0 && (direction == 'down' || direction == 'up')) {
                number++;
                flag = false;
                return flag;
            } else if (trigger == 4 && (direction == 'down' || direction == 'up')) {
                $('#sanji').show();
                number++;
                flag = false;
                return flag;
            } else if (trigger == 3 && (direction == 'down' || direction == 'up')) {
                $('#sanji-text1').show();
                number++;
                flag = false;
                return flag;
            } else if (trigger == 2 && (direction == 'down' || direction == 'up')) {
                $('#sanji-text2').show();
                number++;
                flag = false;
                return flag;
            }else if (trigger == 1 && (direction == 'down' || direction == 'up')) {
                flag = true;
                number = -1;
                $('#sanji').hide();
                $('#sanji-text1').hide();
                $('#sanji-text2').hide();
                $('.sanji').removeClass('animate__animated animate__fadeInUpBig');
                $('.sanji-text1').removeClass('animate__animated animate__fadeInRight');
                $('.sanji-text2').removeClass('animate__animated animate__fadeInRight');
                $('.sanji').addClass('animate__animated animate__fadeInUpBig');
                $('.sanji-text1').addClass('animate__animated animate__fadeInRight');
                $('.sanji-text2').removeClass('animate__animated animate__fadeInRight');
                console.log(number + 'number ! ');
                return flag;
            }
        } else if (origin.index == 4 && (direction == 'down' || direction == 'up')) { //루피
            let flag;
            if (number == 17) {
                trigger = 1;
            } else if (number == 10) {
                trigger = 2;
            } else if (number == 7) {
                trigger = 3;
            } else if (number == 3) {
                trigger = 4;
            } else if (number == -1) {
                trigger = 0;
                number = 0;
            }

            if (trigger == 0 && (direction == 'down' || direction == 'up')) {
                number++;
                flag = false;
                return flag;
            } else if (trigger == 4 && (direction == 'down' || direction == 'up')) {
                $('#luffy').show();
                number++;
                flag = false;
                return flag;
            } else if (trigger == 3 && (direction == 'down' || direction == 'up')) {
                $('#luffy-text1').show();
                number++;
                flag = false;
                return flag;
            }else if (trigger == 2 && (direction == 'down' || direction == 'up')) {
                $('#luffy-text2').show();
                number++;
                flag = false;
                return flag;
            }  else if (trigger == 1 && (direction == 'down' || direction == 'up')) {
                flag = true;
                number = -1;
                $('#luffy').hide();
                $('#luffy-text1').hide();
                $('#luffy-text2').hide();
                $('.luffy').removeClass('animate__animated animate__fadeInUpBig');
                $('.luffy-text1').removeClass('animate__animated animate__fadeInRight');
                $('.luffy-text2').removeClass('animate__animated animate__fadeInRight');
                $('.luffy').addClass('animate__animated animate__fadeInUpBig');
                $('.luffy-text1').addClass('animate__animated animate__fadeInRight');
                $('.luffy-text2').addClass('animate__animated animate__fadeInRight');
                console.log(number + 'number ! ');
                return flag;
            }
        } else if (origin.index == 5 && (direction == 'down' || direction == 'up')) { //너 내 동료가 돼라
            let flag;
            if (number == 27) {
                trigger = 4;
            } else if (number == 17) {
                trigger = 3;
            } else if (number == 10) {
                trigger = 2;
            } else if (number == 3) {
                trigger = 1;
            } else if (number == -1) {
                trigger = 0;
                number = 0;
            }
            $('#black').show();

            if (trigger == 0 && (direction == 'down' || direction == 'up')) {

                number++;
                flag = false;
                return flag;
            } else if (trigger == 1&& (direction == 'down' || direction == 'up')) {
                $("#dream-text").fadeIn(1000);
                number++;
                trigger = 0;
                flag = false;
                return flag;
            } else if (trigger == 2 && (direction == 'down' || direction == 'up')) {
                $("#dream-text").fadeOut(0);
                $('#sky').fadeIn(1000);
                $('#partner').delay(1000).fadeIn(1000);
                number++;
                trigger = 0;
                flag = false;
                return flag;
            } else if (trigger == 3 && (direction == 'down' || direction == 'up')) {
                $("#dream-text2").delay(1000).fadeIn(1000);
                number++;
                trigger = 0;
                flag = false;
                return flag;
            } else if (trigger == 4 && (direction == 'down')) {
                flag = true;
                number = -1;
                return flag;
            } else if (trigger == 4 && direction == 'up') {
                number = -1;
            }
        } else if (origin.index == 6 && (direction == 'down' || direction == 'up')) { //너 내 동료가 돼라
            let flag;
            if (number == 23) {
                trigger = 4;
            } else if (number == 13) {
                trigger = 3;
            } else if (number == 10) {
                trigger = 2;
            } else if (number == 3) {
                trigger = 1;
            } else if (number == -1) {
                trigger = 0;
                number = 0;
            }

            if (trigger == 0 && (direction == 'down' || direction == 'up')) {
                $('#c_one').fadeIn(1000);
                number++;
                flag = false;
                return flag;
            } else if (trigger == 1 && number == 3 && (direction == 'down' || direction == 'up')) {
                $('#c_two').show();
                number++;
                trigger = 0;
                flag = false;
                return flag;
            } else if (trigger == 2 && number == 10 && (direction == 'down' || direction == 'up')) {
                $('#c_three').fadeIn(1000);
                number++;
                trigger = 0;
                flag = false;
                return flag;
            } else if (trigger == 3 && number == 13 && (direction == 'down' || direction == 'up')) {
                $('#c_four').fadeIn(1000);
                $('#c_five').delay(1000).fadeIn(1000);
                $('#c_six').delay(2000).fadeIn(1000);
                number++;
                trigger = 0;
                flag = false;
                return flag;
            } else if (trigger == 4 && (direction == 'down')) {
                flag = true;
                number = -1;
                return flag;
            } else if (trigger == 4 && direction == 'up') {
                number = 27;
                trigger =1;
            }
        } else if (origin.index == 7 && (direction == 'down' || direction == 'up')) {
            let flag;
            if (number == 24) {
                trigger = 1;
            } else if (number == 14) {
                trigger = 2;
            } else if (number == 7) {
                trigger = 3;
            } else if (number == -1) {
                trigger = 0;
                number = 0;
            }

            if (trigger == 0 && (direction == 'down' || direction == 'up')) {
                $('#t_two').show();
                number++;
                flag = false;
                return flag;
            } else if (trigger == 3 && (direction == 'down' || direction == 'up')) {
                $('#t_three').show();
                $('#t_four').show();
                number++;
                trigger = 0;
                flag = false;
                return flag;
            } else if (trigger == 2 && (direction == 'down' || direction == 'up')) {
                $('#t_five').show();
                number++;
                flag = false;
                trigger = 0;
                return flag;
            } else if (trigger == 1 && (direction == 'down')) {
                flag = true;
                number = -1;
                trigger = 0;
                return flag;
            }else if (trigger == 1 && direction == 'up') {
                number = 23;
                trigger = 4;
            }
        }else if (origin.index == 8 && (direction == 'down' || direction == 'up')) { //
            let flag;
            if (number == 30) {
                trigger = 1;
            } else if (number == 21) {
                trigger = 2;
            }else if (number == 14) {
                trigger = 3;
            } else if (number == 7) {
                trigger = 4;
            } else if (number == -1) {
                trigger = 0;
                number = 0;
            }
            $('#this_one').fadeIn(1000);
            if (trigger == 0 && (direction == 'down' || direction == 'up')) {
                number++;
                flag = false;
                return flag;
            } else if (trigger == 4 && (direction == 'down' || direction == 'up')) {
                $('#this_two').show();
                $('#this_three').delay(100).fadeIn(1000);
                number++;
                trigger = 0;
                flag = false;
                return flag;
            } else if (trigger == 3 && (direction == 'down' || direction == 'up')) {
                $('#this_four').show();
                number++;
                flag = false;
                trigger = 0;
                return flag;
            } else if (trigger == 2 && (direction == 'down' || direction == 'up')) {
                $('#this_five').show();
                number++;
                flag = false;
                trigger = 0;
                return flag;
            } else if (trigger == 1 && (direction == 'down')) {
                flag = true;
                number = -1;
                trigger = 0;
                return flag;
            } else if (trigger == 1 && direction == 'up') {
                number = 24;
                trigger =1;
            }
        }else if (origin.index == 9 && (direction == 'down' || direction == 'up')) { //
            let flag;
            if (number == 35) {
                trigger = 1;
            } else if (number == 27) {
                trigger = 2;
            }else if (number == 23) {
                trigger = 3;
            }else if (number == 19) {
                trigger = 4;
            }else if (number == 15) {
                trigger = 5;
            }else if (number == 11) {
                trigger = 6;
            }else if (number == 3) {
                trigger = 7;
            } else if (number == -1) {
                trigger = 0;
                number = 0;
            }

            if (trigger == 0 && (direction == 'down' || direction == 'up')) {
                $('#v_one').fadeIn(1000);
                number++;
                flag = false;
                return flag;
            } else if (trigger == 7 && (direction == 'down' || direction == 'up')) {
                $('#v_two').fadeIn(1000);
                $('#v_three').delay(500).fadeIn(1000);
                number++;
                trigger = 0;
                flag = false;
                return flag;
            } else if (trigger == 6 && (direction == 'down' || direction == 'up')) {
                $('#v_four').show();
                number++;
                flag = false;
                trigger = 0;
                return flag;
            } else if (trigger == 5 && (direction == 'down' || direction == 'up')) {
                $('#v_five').show();
                number++;
                flag = false;
                trigger = 0;
                return flag;
            } else if (trigger == 4 && (direction == 'down' || direction == 'up')) {
                $('#v_six').show();
                number++;
                flag = false;
                trigger = 0;
                return flag;
            } else if (trigger == 3 && (direction == 'down' || direction == 'up')) {
                $('#v_seven').show();
                number++;
                flag = false;
                trigger = 0;
                return flag;
            } else if (trigger == 2 && (direction == 'down' || direction == 'up')) {
                $('#v_eight').show();
                number++;
                flag = false;
                trigger = 0;
                return flag;
            } else if (trigger == 1 && (direction == 'down')) {
                flag = true;
                number = -1;
                trigger = 0;
                return flag;
            } else if (trigger == 1 && direction == 'up') {
                number = 30;
                trigger =1;
            }
        } else if (origin.index == 10 && (direction == 'down' || direction == 'up')) { //
            let flag;
            if (number == 28) {
                trigger = 1;
            } else if (number == 21) {
                trigger = 2;
            }else if (number == 14) {
                trigger = 3;
            } else if (number == 7) {
                trigger = 4;
            } else if (number == -1) {
                trigger = 0;
                number = 0;
            }

            if (trigger == 0 && (direction == 'down' || direction == 'up')) {
                $('#g_one').fadeIn(1000);
                number++;
                flag = false;
                return flag;
            } else if (trigger == 4 && (direction == 'down' || direction == 'up')) {
                $('#g_two').show();
                $('#g_three').delay(500).show();
                number++;
                trigger = 0;
                flag = false;
                return flag;
            } else if (trigger == 3 && (direction == 'down' || direction == 'up')) {
                $('#g_four').show();
                number++;
                flag = false;
                trigger = 0;
                return flag;
            } else if (trigger == 2 && (direction == 'down' || direction == 'up')) {
                $('#g_five').delay(500).fadeIn(1000);
                number++;
                flag = false;
                trigger = 0;
                return flag;
            } else if (trigger == 1 && (direction == 'down')) {
                flag = true;
                number = -1;
                trigger = 0;
                return flag;
            }else if (trigger == 1 && direction == 'up') {
                number = 35;
                trigger =1;
            }
        } else if (origin.index == 11 && (direction == 'down' || direction == 'up')) { //
            let flag;
            if (number == 28) {
                trigger = 1;
            } else if (number == 21) {
                trigger = 2;
            }else if (number == 14) {
                trigger = 3;
            } else if (number == 7) {
                trigger = 4;
            } else if (number == -1) {
                trigger = 0;
                number = 0;
            }

            if (trigger == 0 && (direction == 'down' || direction == 'up')) {
                $('#ch_one').fadeIn(1000);
                number++;
                flag = false;
                return flag;
            } else if (trigger == 4 && (direction == 'down' || direction == 'up')) {
                $('#ch_two').show();
                number++;
                trigger = 0;
                flag = false;
                return flag;
            } else if (trigger == 3 && (direction == 'down' || direction == 'up')) {
                $('#ch_three').delay(500).show();
                number++;
                flag = false;
                trigger = 0;
                return flag;
            } else if (trigger == 2 && (direction == 'down' || direction == 'up')) {
                $('#ch_four').delay(1000).show();
                number++;
                flag = false;
                trigger = 0;
                return flag;
            } else if (trigger == 1 && (direction == 'down' || direction == 'up')) {
                flag = true;
                number = 28;
                trigger = 1;
                return flag;
            }
        }


    }

});