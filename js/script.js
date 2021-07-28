$(document).ready(function(){

    /* 키보드 이벤트 (input_part) */
    function field_key_Evt (){
        $("main .cont_box form fieldset .form_group .input_part input").keyup(function(){
            $("main .cont_box form fieldset .form_group .guide").hide();
            $(this).parent(".input_part").siblings(".guide").show();
            $("main .cont_box form fieldset .form_group .input_part label").css("top","15px")
            console.log("키 이벤트 발생")
        });
        /* 입력란 클릭시 이벤트(가이드) */
        $("main .cont_box form fieldset .form_group .input_part input").click(function(){
            $("main .cont_box form fieldset .form_group .guide").hide();
            $(this).parent(".input_part").siblings(".guide").show();
            $("main .cont_box form fieldset .form_group .input_part label").css("top","15px")
            console.log("클릭 이벤트 발생")
        });
    }
    field_key_Evt();

    /*체크박스 클릭시 모두체크*/
    function All_check(){
        //개인정보 약관
        $("main .cont_box .terms .flex_box #personal").click(function(){
            // 경우의 수            
            if($("input:checkbox[id='personal']").is(":checked") == true){//전체선택 체크박스가 체크되어있다면..
    
                /* 형제 모두 체크 */
                $("input:checkbox[id='sign_up']").prop("checked", true);
                $("input:checkbox[id='personal_agree']").prop("checked", true);
    
            }else{//personal 체크박스가 체크되어 있지 않다면.
                $("input:checkbox[id='sign_up']").prop("checked", false);
                $("input:checkbox[id='personal_agree']").prop("checked", false);
            }
        });
    
        //광고성 정보 수신 동의
        $("main .cont_box .ad .flex_box #ad_agree").click(function(){
             
            if($("input:checkbox[id='ad_agree']").is(":checked") == true){//ad_agree 체크박스가 체크되어있다면..
    
                /* 형제 모두 체크 */
                $("input:checkbox[id='ad_email']").prop("checked", true);
                $("input:checkbox[id='ad_sms']").prop("checked", true);
    
            }else{//ad_agree 체크박스가 체크되어 있지 않다면.
                
                $("input:checkbox[id='ad_email']").prop("checked", false);
                $("input:checkbox[id='ad_sms']").prop("checked", false);
            }
        });
    }
    All_check();

    //숨기기,펼치기
    function Guide(){
        $("main .cont_box div .flex_box span.menu_btn").click(function(){
            const $flex_box = $(this).parent(".flex_box").siblings();
            if($flex_box.css("display") === "none"){
                $($flex_box).show();   
                $(this).text("숨기기 ▲");
                $(this).prev().css("font-weight","700");
                return false;
            }else{
                $($flex_box).hide();
                $(this).text("펼치기 ▼");   
                $(this).prev().css("font-weight","400");
                return false;
            }
            
        });
    }
    Guide();
    
    //팝업 버튼
    $("main .cont_box .terms .flex_box:nth-child(2) span").click(function(){
        //회원가입 팝업버튼 클릭시
        $(".dark").addClass("active");
        $(".popup_btn_01").addClass("active");
    });
    $(".close_btn").click(function(){
        //X버튼 클릭시
        $(".dark").removeClass("active");
        $(".popup_btn_01").removeClass("active");
    });

    $("main .cont_box .terms .flex_box:nth-child(3) span").click(function(){
        //회원가입 팝업버튼 클릭시
        $(".dark").addClass("active");
        $(".popup_btn_02").addClass("active");
    });
    $(".close_btn").click(function(){
        //X버튼 클릭시
        $(".dark").removeClass("active");
        $(".popup_btn_02").removeClass("active");
    });

    // 비밀번호 처음 클릭시
    $("main .cont_box form fieldset .form_group .input_part .icon_pwoff").click(function(){
        $(this).hide();
        $(this).siblings(".icon_pwon").show();
        $(this).siblings("input").attr("type","text");
    });

    // 비밀번호 한번 더 클릭시
    $("main .cont_box form fieldset .form_group .input_part .icon_pwon").click(function(){
        $(this).hide();
        $(this).siblings(".icon_pwoff").show();
        $(this).siblings("input").attr("type","password");
    });

    //페이코 윈도우 팝업창
    $("main .cont_box .bottom .flex_box .logo_flex:nth-child(1) a").click(function(){
        alert("[꼭 확인해주세요]\n공용PC(PC방 등)인 경우 타인의 SNS계정으로 로그인이 되어 있는지 확인해주세요.");
        window.open("https://id.payco.com/login.nhn?serviceProviderCode=PAY&inflowKey=www&userLocale=ko_KR&nextURL=https%3A%2F%2Fwww.payco.com%2FisTargetForSecurity.nhn","페이코팝업","width=420px,height=550px,scrollbars=yes");
    });
    //네이버 윈도우 팝업창
    $("main .cont_box .bottom .flex_box .logo_flex:nth-child(2) a").click(function(){
        alert("[꼭 확인해주세요]\n공용PC(PC방 등)인 경우 타인의 SNS계정으로 로그인이 되어 있는지 확인해주세요.");
        window.open("https://nid.naver.com/nidlogin.login?mode=form&url=https%3A%2F%2Fwww.naver.com","네이버팝업","width=420px,height=550px,scrollbars=yes");
    });
    //페이스북 윈도우 팝업창
    $("main .cont_box .bottom .flex_box .logo_flex:nth-child(3) a").click(function(){
        alert("[꼭 확인해주세요]\n공용PC(PC방 등)인 경우 타인의 SNS계정으로 로그인이 되어 있는지 확인해주세요.");
        window.open("https://www.facebook.com/","페이스북팝업","width=420px,height=550px,scrollbars=yes");
    });







});