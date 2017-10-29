var app = angular.module('app', []);
app.controller('myCtrl', function ($scope) {});
app.directive('sliderBlock', function () {
    return {
        replace: true
        , templateUrl: 'template/slider.html'
        , controller: function ($scope) {            
            
            $(document).ready(function () {
                $("#immersive_slider").immersive_slider({
                    container: ".main"
                });
                var $btnTop = $('#btnUp');
                $(window).on("scroll", function () {
                    if ($(window).scrollTop() > 180) {
                        $btnTop.fadeIn();
                    }
                    else {
                        $btnTop.fadeOut();
                    }
                    $btnTop.on("click", function () {
                        $("html, body").animate({
                            scrollTop: 0
                        })
                    })
                })
                $("#openChat").click(function () {
                    $('.chatBlock').slideToggle();
                    $('#openChat').fadeOut();
                })
                $("#close").click(function () {
                    $('.chatBlock').slideUp();
                    $('#openChat').fadeIn();
                });
                $(".moreGood").click(function () {
                    $('.details').fadeToggle(1000);
                });
//                $('.bExit').click(function () {
//                    $('.details').css("display","none");
//                });
            });
        }
    }
});
app.directive('headerBlock', function () {
    return {
        replace: true
        , templateUrl: 'template/menu.html'
        , controller: function ($scope) {
            $scope.home = false;
            $scope.blog = false;
            $scope.contact = false;
            $scope.slider = true;
            $scope.autoris = true;
            $scope.mainC = true;
            $scope.search = false;
            $scope.pp = false;
            $scope.goods = false;
            $scope.header = true;
            $scope.chat = true;
            //            $scope.admin = false;
            $scope.menuButtons = [
                {
                    action: function () {
                        $scope.home = false;
                        $scope.contact = false;
                        $scope.blog = false;
                        $scope.slider = true;
                        $scope.mainC = true;
                        $scope.search = false;
                        $scope.pp = false;
                        $scope.goods = false;
                        $scope.admin = false;
                        $scope.header = true;
                        $scope.chat = true;
                    }
                    , name: "Home"
                 }, {
                    action: function () {
                        $scope.home = false;
                        $scope.contact = false;
                        $scope.blog = false;
                        $scope.slider = false;
                        $scope.mainC = false;
                        $scope.search = false;
                        $scope.pp = false;
                        $scope.goods = true;
                        $scope.admin = false;
                        $scope.header = true;
                        $scope.chat = true;
                    }
                    , name: "Goods"
                 }, {
                    action: function () {
                        $scope.home = false;
                        $scope.contact = false;
                        $scope.blog = true;
                        $scope.slider = false;
                        $scope.mainC = false;
                        $scope.search = false;
                        $scope.pp = false;
                        $scope.goods = false;
                        $scope.admin = false;
                        $scope.header = true;
                        $scope.chat = true;
                    }
                    , name: "Blog"
                 }, {
                    action: function () {
                        $scope.home = false;
                        $scope.contact = true;
                        $scope.blog = false;
                        $scope.slider = false;
                        $scope.mainC = false;
                        $scope.search = false;
                        $scope.pp = false;
                        $scope.goods = false;
                        $scope.admin = false;
                        $scope.header = true;
                        $scope.chat = true;
                    }
                    , name: "Contact"
                 }
                , {
                    action: function () {
                        $scope.home = false;
                        $scope.contact = false;
                        $scope.blog = false;
                        $scope.slider = false;
                        $scope.mainC = false;
                        $scope.search = false;
                        $scope.pp = true;
                        $scope.goods = false;
                        $scope.admin = false;
                        $scope.header = false;
                        $scope.header = true;
                        $scope.chat = true;
                    }
                    , name: "My"
                 }, {
                    action: function () {
                        $scope.home = false;
                        $scope.contact = false;
                        $scope.blog = false;
                        $scope.slider = false;
                        $scope.mainC = false;
                        $scope.search = false;
                        $scope.pp = false;
                        $scope.goods = false;
                        $scope.admin = true;
                        $scope.header = false;
                        $scope.chat = false;
                    }
                    , name: "Admin"
            }


                ];
            $scope.Search = function () {
                $scope.home = false;
                $scope.contact = false;
                $scope.blog = false;
                $scope.slider = false;
                $scope.mainC = false;
                $scope.search = true;
                $scope.pp = false;
                $scope.goods = false;
                $scope.admin = false;
                $scope.header = true;
                $scope.chat = true;
            }
        }
    }
});
app.directive('pagesBlock', function () {
    return {
        replace: true
        , templateUrl: 'template/pages.html'
        , controller: function ($scope) {
            $scope.arr = [{
                    title: "News1"
                    , text: "lorem"
    }, {
                    title: "News2"
                    , text: "lorem"
    }, {
                    title: "News3"
                    , text: "lorem"
    },

                {
                    title: "News4"
                    , text: "lorem"
    }
                , {
                    title: "News5"
                    , text: "lorem"
    }

                         ];
        }
    }
});
app.directive('mainContainer', function () {
    return {
        replace: true
        , templateUrl: 'template/main.html'
        , controller: function ($scope) {}
    }
});
app.directive('searchCont', function () {
    return {
        replace: true
        , templateUrl: 'template/search.html'
        , controller: function ($scope) {}
    }
});
app.directive('ownPage', function () {
    return {
        replace: true
        , templateUrl: 'template/ownpage.html'
        , controller: function ($scope, $http) {
            //Авторизація
            $scope.check = function () {
                let loginObj = {
                    login: $scope.login
                    , pass: $scope.pass
                };
                $http.post('http://localhost:8000/homepage.html', loginObj).then(function successCallback(response) {
                    if (response.data == "welcome") {
                        $scope.userIn = "Wellcome " + $scope.login + "!!!";
                        $scope.newUser = false;
                        $scope.enterLogin = true;
                        $scope.user = "";
                        localStorage.userName = $scope.login;
                    }
                    else {
                        $scope.user = response.data;
                    };
                }, function errorCallback(response) {
                    console.log("Error!!!" + response.err);
                });
            };
        }
    }
});
app.directive('chatBlock', function () {
    return {
        replace: true
        , templateUrl: 'template/chat.html'
        , controller: function ($scope) {
            $scope.textField = "";
            $scope.nameField = "Anonim";
            $scope.EnterProfile = function () {
                $scope.nameField = $scope.Name;
            };
            $scope.textiki = [];
            $scope.EnterText = function () {
                $scope.date = new Date();
                $scope.textiki.push({
                    date: $scope.date
                    , nameField: $scope.nameField
                    , textField: $scope.textField
                });
                $scope.textField = "";
            }
        }
    }
});
app.directive('mainGoods', function () {
    return {
        replace: true
        , templateUrl: 'template/goods.html'
        , controller: function ($scope) {}
    }
});
app.directive('adminPage', function () {
    return {
        replace: true
        , templateUrl: 'template/adminpage.html'
        , controller: function ($scope) {
            //            $scope.header = false;
        }
    }
});
app.directive('goodInfo', function () {
    return {
        replace: true
        , templateUrl: 'template/goodinfo.html'
        , controller: function ($scope) {
               $scope.name = "Mi Robot Vacuum";
               $scope.about= "Xiaomi Mijia Mi Robot Vacuum Cleaner (SKV4000CN) Детальніше: https://rozetka.com.ua/xiaomi_skv4000cm/p14663936/";
               $scope.price= "10 499грн";
        }
    }
});
