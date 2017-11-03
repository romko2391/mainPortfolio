//Під`єднюємо ангуляр
var app = angular.module('app', ['ngRoute']);
//Забираєм %2F та # з url сайту
app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);
}]);
//Створюєм адреси
app.config(function ($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/'
    });
});
//var app = angular.module('app', []);
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
                $("#newUser").click(function () {
                    $('#registration').fadeToggle(1000);
                });
                                 $("#moreGood").click(function () {
                                    $('#details').hideToggle(1000);
                                });
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
//            $scope.moreInf = false;
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
//                        $scope.details = false;
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
//                        $scope.details = false;
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
//                        $scope.details = false;
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
//                        $scope.details = false;
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
//                        $scope.details = false;
                    }
                    , name: "My"
                 }

                , {
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
//                        $scope.details = false;
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
//                $scope.details = true;
            }
        }
    }
});
app.directive('pagesBlock', function () {
    return {
        replace: true
        , templateUrl: 'template/pages.html'
        , controller: function ($scope, $http) {
            $http.get("http://localhost:8000/news").then(function success(response) {
                $scope.arr = response.data;
            })
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
        , controller: function ($scope) {
            $scope.mainText = [
                "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore."
                , "Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes). Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit is the first known version. It was found by Richard McClintock, a philologist, director of publications at Hampden-Sydney College in Virginia; he searched for citings of consectetur in classical Latin literature, a term of remarkably low frequency in that literary corpus."
                , "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure. "

            ]
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
        , controller: function ($scope, $http) {
            $http.get("http://localhost:8000/goods").then(function successCallback(response) {
                $scope.records = response.data;
            });
            var more = $scope.more;
            $scope.more = function (sc) {
                for(var i = 0; i < $scope.records.length; i++)
                    if($scope.records[i]["good_id"] == sc.x.good_id)
                        $scope.g_id = i;
                $scope.name  = $scope.records[$scope.g_id]["name"];
                $scope.about = $scope.records[$scope.g_id]["about"];
                $scope.price = $scope.records[$scope.g_id]["price"];
                $scope.moreInf = true;
//                console.log(more);
            }
        }
    }
});
app.directive('adminPage', function () {
    return {
        replace: true
        , templateUrl: 'template/adminpage.html'
        , controller: function ($scope, $http) {
            $scope.addNews = function () {
                var body = {
                    title: $scope.newsTitleAdd
                    , text: $scope.newsAboutAdd
                , }
                $http.post("http://localhost:8000/news", JSON.stringify(body)).then(function success(response) {
                    console.log(response);
                })
            }
            $scope.clearNews = function () {
                $scope.newsTitleAdd = "";
                $scope.newsAboutAdd = "";;
            }
            $scope.clearitem = function () {
                $scope.nameAdd = "";
                $scope.priceAdd = "";
                $scope.aboutAdd = "";
            }
            $scope.additem = function () {
                $http.get("http://localhost:8000/goods").then(function successCallback(response) {
                    $scope.records = response.data;
                })
                var imgNumberName = 0;
                if ($scope.records[0] == undefined) {
                    imgNumberName = 1;
                }
                else {
                    imgNumberName = $scope.records[$scope.records.length - 1].good_id + 1;
                };
                //                alert($scope.records);
                var fd = new FormData();
                fd.append(imgNumberName, $scope.myFile);
                $http.post('http://localhost:8000/img', fd, {
                    transformRequest: angular.identity
                    , headers: {
                        'Content-Type': undefined
                    }
                }).then(function successCallback() {
                    console.log("Uploaded!");
                }, function errorCallback(response) {
                    console.log("Error!!!" + response.err);
                });
                var body = {
                    name: $scope.nameAdd
                    , price: $scope.priceAdd
                    , about: $scope.aboutAdd
                    , good_photo_url: "goods/" + imgNumberName
                }
                $http.post("http://localhost:8000/goods", JSON.stringify(body)).then(function success(response) {
                    console.log(response);
                })
            }
        }
    }
});
//детальніше про товар
app.directive('goodInfo', function () {
    return {
        replace: true
        , templateUrl: 'template/goodinfo.html'
        , controller: function ($scope, $http) {
            var close = $scope.exit; 
            $scope.exit = function() {
                $scope.moreInf = false;
//                console.log(close);
            }
        }
    }
});
//Директива Авторизації / Реєстрації
app.directive('ownPage', function () {
    return {
        replace: true
        , templateUrl: 'template/ownpage.html'
        , controller: function ($scope, $http) {
            $scope.changePasswordStatus = false;
            //Розлогінитись
            //            $scope.logOut = function () {
            //                $scope.newUser = true;
            //                $scope.enterLogin = false;
            //                localStorage.userName = "default";
            //                $scope.ProfileStatus = false;
            //            };
            //Загрузка авторизованого юзера (якщо є)
            if (localStorage.userName == undefined) {
                localStorage.userName = "default";
            }
            else {
                if (localStorage.userName != "default") {
                    $scope.userIn = "Wellcome " + localStorage.userName + "!!!";
                    $scope.newUser = false;
                    $scope.ProfileStatus = true;
                    $scope.enterLogin = true;
                    $scope.user = "";
                    let loginObj = {
                        login: localStorage.userName
                    };
                    $http.post('http://localhost:8000/user-prof', loginObj).then(function successCallback(response) {
                        $scope.userProfile = response.data;
                        $scope.nameUserProfile = $scope.userProfile[0].name;
                        $scope.snameUserProfile = $scope.userProfile[0].sname;
                        $scope.dateUserProfile = $scope.userProfile[0].date;
                        $scope.aboutUserProfile = $scope.userProfile[0].about;
                    }, function errorCallback(response) {
                        console.log("Error!!!" + response.err);
                    });
                }
                else {
                    $scope.newUser = true;
                    $scope.enterLogin = false;
                }
            };
            //Авторизація
            $scope.check = function () {
                let loginObj = {
                    login: $scope.login
                    , pass: $scope.password
                };
                $http.post('http://localhost:8000/login-auth', loginObj).then(function successCallback(response) {
                    if (response.data == "welcome") {
                        $scope.userIn = "Wellcome " + $scope.login + "!!!";
                        $scope.newUser = false;
                        $scope.enterLogin = true;
                        $scope.user = "";
                        localStorage.userName = $scope.login;
                        let loginObj = {
                            login: localStorage.userName
                        };
                        $http.post('http://localhost:8000/user-prof', loginObj).then(function successCallback(response) {
                            $scope.userProfile = response.data;
                            $scope.nameUserProfile = $scope.userProfile[0].name;
                            $scope.snameUserProfile = $scope.userProfile[0].sname;
                            $scope.dateUserProfile = $scope.userProfile[0].date;
                            $scope.aboutUserProfile = $scope.userProfile[0].about;
                            $scope.ProfileStatus = true;
                            $scope.user = "Welcome, " + $scope.nameUserProfile + "!!!";
                        }, function errorCallback(response) {
                            console.log("Error!!!" + response.err);
                        });
                    }
                    else {
                        $scope.user = response.data;
                    };
                }, function errorCallback(response) {
                    console.log("Error!!!" + response.err);
                });
            };
            //Реєстрація
            //            $scope.registr = function () {
            //                let loginObj = {
            //                    login: $scope.login,
            //                    password: $scope.password
            //                };
            //                $http.post('http://localhost:8000/login-reg', loginObj)
            //                    .then(function successCallback(response) {
            //                        $scope.user = response.data;
            //                        $http.get('http://localhost:8000/users')
            //                            .then(function successCallback(response) {
            //                                $scope.arrUsers = response.data;
            //                            }, function errorCallback(response) {
            //                                console.log("Error!!!" + response.err);
            //                            });
            //                    }, function errorCallback(response) {
            //                        console.log("Error!!!" + response.err);
            //                    });
            //            };
        }
    }
});
//Директива Профайлу
app.directive('profileBlock', function () {
    return {
        replace: true
        , templateUrl: 'template/adminpage.html'
        , controller: function ($scope) {
            $scope.clearitem = function () {
                $scope.newName = "";
                $scope.newLastName = "";
                $scope.newEmail = "";
                $scope.newPass = "";
                $scope.newBirth = "";
            }
        }
    }
});
// 
app.directive('registration', function () {
    return {
        replace: true
        , templateUrl: 'template/registration.html'
        , controller: function ($scope) {
            $scope.newUser = function () {
                //                $scope.pp = true;
                //              $scope.pp = false;
            }
        }
    }
});
app.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A'
        , link: function (scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            element.bind('change', function () {
                scope.$apply(function () {
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);