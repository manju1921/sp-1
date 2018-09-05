$(document).ready(function() {

    $("#myform").submit(function(e) {

        $('tr').each(function () {
            if($(this).css('display') == 'none'){
                $(this).addClass('donotvalidate');
            }else{
                $(this).removeClass('donotvalidate');

                //validateForm(event);
            }
        });



        var url = "http://xyz"; // the script where you handle the form input.

        $.ajax({
            type: "POST",
            url: url,
            data: $("#myform").serialize(), // serializes the form's elements.
            success: function(data) {
                alert(data); // show response from the php script.
            }
        });

        e.preventDefault(); // avoid to execute the actual submit of the form.
    });



    function checkSpcialChar(event) {
        if (!((event.keyCode >= 65) && (event.keyCode <= 90) || (event.keyCode >= 97) && (event.keyCode <= 122) || (event.keyCode >= 48) && (event.keyCode <= 57) || (event.keyCode == 45))) {
            var serviceNameID = document.getElementById('serviceNameId');
            serviceNameID.style.display = 'block';
            serviceNameID.classList.add('show');
            event.returnValue = false;
            return;
        } else {
            var serviceNameID = document.getElementById('serviceNameId');
            serviceNameID.style.display = 'none';
            serviceNameID.classList.remove('show');
        }
        event.returnValue = true;
    }

    function validateForm(e) {
        e.preventDefault();
        var $idpService = $('#fn-name').val().toLowerCase(),
            $vertical = $('#fn-vertical').find(":selected").text(),
            $productOwner = $('#fn-product-owner').val(),
            $engineeringManager = $('#fn-engineering-manager').val(),
            $lobHead = $('#fn-lob-head').val(),
            $prdDoc = $('#fm-prd-doc').val(),
            $designDoc = $('#fn-design-doc').val(),
            $architect = $('#fn-architect').val(),
            $email = $('#fn-team-email').val(),
            $technologyStacks = $('#fn-list').val();

        var coloArray = $.map($('input[name="colos"]:checked'), function(c) {
            return c.value;
        });

        var expectedQps = $.map($('.fn-expected'), function(c) {
            return c.value;
        });

        var $externalTrafficToInstance = $('input[name=externalYesno]:checked').val();
        var $infosecReviewed = $('input[name=Infosecyesno]:checked').val();

        var $infosecJira = $('#fn-Jira').val();

        var domainEndpointURI = $('#fn-domain').val();
        var $certs = $('#fn-certs').val();
        var $secureHTTP = $('#fn-http').val();
        var $nonsecureHTTP = $('#fn-http-non').val();
        var ump = $('input[name=UMP]:checked').val();
        var umpTraffic = $.map($('.fn-traffic'), function(c) {
            return c.value;
        });
        var ApplicationQA = $('input[name=Application]:checked').val();

        var QAURL = $('#fn-qa').val();

        var hawkeyeBenchmarkingLnk = $('#fn-hawkeye-link').val();

        var instancesPerColo = $.map($('.fn-instances'), function(c) {
            return c.value;
        });

        var CPU = $('#fn-vCPU').val();

        var RAM = $('#fn-RAM').val();

        var Disk = $('#fn-Disk').val();

        var QPS = $('#fn-QPS').val();

        var networkBandwidth = $('#networkBandwidth').find(":selected").text();

        var multithreadApplication = $('input[name=Multithread]:checked').val();

        var concurrencyExpected = $('input[name=Concurrency]:checked').val();

        var dockerGitLink = $('#fn-Docker').val();

        var healthcheckUrl = $('#fn-Healthcheck').val();

        var upstreamServices = $('#fn-Upstream').val();

        var downstreamServices = $('#fn-Downstream').val();

        var serviceType = $('input[name=Service]:checked').val();

        var mesosComplanant = $('input[name=Mesos]:checked').val();

        var justificatification = $('#fn-justificatification').val();

        var portsNeeded = $('#fn-stateless-Ports').val();

        var staticPorts = $('#fn-Static-Ports').val();

        var dynamicPorts = $('#fn-Dynamic-Ports').val();

        var callServiceStateful = $('#fn-Statefull-properties').val();

        var Autostart = $('input[name=Autostart]:checked').val();

        var portsUsed = $('#fn-Statefull-Ports').val();

        var portNumber = $('#fn-Port').val();

        var ZKDiscoverablePath = $('#fn-Discoverable').val();

        var specialSetupOnBox = $('#fn-Special').val();

        var ImportantLogs = $('#fn-Important').val();

        var logRotation = $('input[name=Rotation]:checked').val();

        var exceptionCountingEnabled = $('input[name=Exception]:checked').val();

        var serviceStartupTime = $('#fn-Service').val();

        var gracefulShutdownTime = $('#fn-Graceful').val();

        var health = $('input[name=health]:checked').val();

        var Drain = $('input[name=Drain]:checked').val();

        var crashed = $('input[name=crashed]:checked').val();

        var hawkeyeEndpoint = $('#fn-Hawkeye').val();

        var metricsSentPerInstance = $('#fn-Metrics').val();

        var topMetrics = $('#fn-top-Metrics').val();

        var topBusinessMetricsToWatch = $('#fn-business-Metrics').val();

        var thresholdsForAlerts = $('#fn-Thresholds').val();

        var pagerdutyEnabled = $('#fn-Pagerduty').val();


        $(".required").focusin(function() {
            if (!$(this).parent().find('.error').hasClass('hide')) {
                $(this).parent().find('.error').addClass('hide').focus();
            }

        });
        $(".required-select").focusin(function() {
            if (!$(this).parent().find('.error').hasClass('hide')) {
                $(this).parent().find('.error').addClass('hide').focus();
            }

        });

        $('.required-checkbox').focusin(function() {
            if (!$(this).parent().find('.error').hasClass('hide')) {
                $(this).parent().find('.error').addClass('hide').focus();
            }
        });

        $('.required-radio').focusin(function() {
            // if (!$(this).parent().find('.error').hasClass('hide')) {
            //     $(this).parent().find('.error').addClass('hide').focus();
            // }
	        
	        $('input.required-radio:radio').each(function () {

                var closestTR = $(this).closest('tr');

                if($(closestTR).hasClass('donotvalidate') ){
                    return;
                }else{
                    var rname = $(this).attr('name');
                    if ($.inArray(rname, names) == -1) {
                        names.push(rname);
                    }
                }

	        });

	        //do validation for each group
	        $.each(names, function (i, name) {
	            if ($('input[name="' + name + '"]:checked').length >= 0) {
	                $('input[name="' + name + '"]').parent().find('.error').addClass('hide').focus();
	                //$('html, body').animate({scrollTop:$(this).offset().top}, 'slow');
	                event.preventDefault();
	                return;
	            }else {
	                $('input[name="' + name + '"]').parent().find('.error').removeClass('hide').focus();
	            }
	        });

        });


        $('.required').each(function(i, el) {

            var closestTR = $(this).closest('tr');

            if ($(closestTR).hasClass('donotValidate')) {
                return;
            }else{
                var data = $(el).val();
                // console.log(i + ': ' + data);
                var len = data.length;
                if (len < 1) {

                    $(this).parent().find('.error').removeClass('hide').focus();
                    //$('html, body').animate({scrollTop:$(this).offset().top}, 'slow');
                    event.preventDefault();
                    return;
                } else {
                    $(this).parent().find('.error').addClass('hide').focus();
                }
            }
        });



        $('.required-checkbox').each(function(i, el) {
            if ($(".required-checkbox input[type=checkbox]:checked").length < 1) {
                $(this).parent().find('.error').removeClass('hide').focus();
                //$('html, body').animate({scrollTop:$(this).offset().top}, 'slow');
                event.preventDefault();
                return;
            } else {
                $(this).parent().find('.error').addClass('hide').focus();
            }
        });

        // $('.required-radio').each(function(i, el) {
        //     if ($(".required-radio input[type=radio]:checked").length <= 0) {
        //         $(this).parent().find('.error').removeClass('hide').focus();
        //         //$('html, body').animate({scrollTop:$(this).offset().top}, 'slow');
        //         event.preventDefault();
        //         return;
        //     } else {
        //         $(this).parent().find('.error').addClass('hide').focus();
        //     }
        // });

        var names = [];
        $('input:radio').each(function () {
            var closestTR = $(this).closest('tr');

            if ($(closestTR).hasClass('donotValidate')) {
                return;
            }else{
                var rname = $(this).attr('name');
                if ($.inArray(rname, names) == -1) names.push(rname);
            }
        });

        //do validation for each group
        $.each(names, function (i, name) {
            if ($('input[name="' + name + '"]:checked').length == 0) {
                $('input[name="' + name + '"]').parent().find('.error').removeClass('hide').focus();
                //$('html, body').animate({scrollTop:$(this).offset().top}, 'slow');
                event.preventDefault();
                return;
            }else {
                $(this).parent().find('.error').addClass('hide').focus();
            }
        });


        $('.required-select').each(function(i, el) {
            var len = $(this).prop('selectedIndex');

            if (len == 0) {

                $(this).parent().find('.error').removeClass('hide').focus();
                //$('html, body').animate({scrollTop:$(this).offset().top}, 'slow');
                event.preventDefault();
                return;
            } else {
                $(this).parent().find('.error').addClass('hide').focus();
            }
        });

    }


});


function checkSpcialChar(event) {
    if (!((event.keyCode >= 65) && (event.keyCode <= 90) || (event.keyCode >= 97) && (event.keyCode <= 122) || (event.keyCode >= 48) && (event.keyCode <= 57) || (event.keyCode == 45))) {
        var serviceNameID = document.getElementById('serviceNameId');
        serviceNameID.style.display = 'block';
        serviceNameID.classList.add('show');
        event.returnValue = false;
        return;
    } else {
        var serviceNameID = document.getElementById('serviceNameId');
        serviceNameID.style.display = 'none';
        serviceNameID.classList.remove('show');
    }
    event.returnValue = true;
}


var temp = [];

function handleClick(ele) {
    //console.log(ele.value+" "+ele.checked)
    //console.log(temp.indexOf(ele.value))

    if (ele.checked) {

    }
    var index = temp.indexOf(ele.value)
    if (index > -1) {
        temp.splice(index, 1);
    } else {
        temp.push(ele.value)
    }

    //console.log(temp)
    //document.getElementById("fn-expected").value = temp.join(",")
    //document.getElementById("fn-traffic").value = temp.join(",")

    var ele = document.getElementById('fn-expected-container')
    while (ele.firstChild) {
        ele.removeChild(ele.firstChild);
    }
    for (var i = 0; i < temp.length; i++) {
        createTextBox(temp[i], ele, "fn-expected-")
    }

    var ele = document.getElementById('fn-traffic-container')
    while (ele.firstChild) {
        ele.removeChild(ele.firstChild);
    }
    for (var i = 0; i < temp.length; i++) {
        createTextBox(temp[i], ele, "fn-traffic-")
    }

    var ele = document.getElementById('fn-instances-container')
    while (ele.firstChild) {
        ele.removeChild(ele.firstChild);
    }
    for (var i = 0; i < temp.length; i++) {
        createTextBox(temp[i], ele, "fn-instances-")
    }

   
}

function createTextBox(name, ele, field) {

    var div = document.createElement("div");
    div.className = "form-group";

    var label = document.createElement("label");
    var t = document.createTextNode(name);
    label.appendChild(t);
    div.appendChild(label);

    var str1 = "form-control required ";

    var str2 = field.slice(0, -1);
    var res = str1.concat(str2);

    var input = document.createElement("input");

    input.className = res
    input.id = field + name
    input.setAttribute("type", "text");
    input.setAttribute("name", field + name);
    div.appendChild(input);

    ele.appendChild(div);
    ele.appendChild(div);

	var idiv = document.createElement("div");
    idiv.className = "hide error";
    div.appendChild(idiv);
	idiv.appendChild(document.createTextNode("Please fill this field properly"));

}


function yesnoCheck() {
    if (document.getElementById('yesCheck').checked) {
        document.getElementById('ifYes').style.display = 'table-row';
        // document.getElementById('ifno').style.display = 'none';
    } else {
        document.getElementById('ifYes').style.display = 'none';
    }
}

function InfosecyesnoCheck() {
    if (document.getElementById('InfosecyesCheck').checked) {
        document.getElementById('InfosecifYes').style.display = 'table-row';
        document.getElementById('InfosecifNo').style.display = 'none!important';
        var InfosecifNo = document.getElementById('InfosecifNo');
        InfosecifNo.classList.remove("show");
        document.getElementById("submitForm").removeAttribute("disabled");
    } else {
        document.getElementById('InfosecifYes').style.display = 'none';
        document.getElementById('InfosecifNo').style.display = 'table-row!important';
        var InfosecifNo = document.getElementById('InfosecifNo');

        InfosecifNo.classList.add("show");
        //document.getElementById("submitForm").setAttribute("disabled", "disabled");
    }
}


function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function isNumberWithcoma(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    //console.log(charCode)
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        if (charCode == 44) {
            return true;
        }
        return false;
    }
    return true;
}


function umpcheck() {
    if (document.getElementById('UMPyesCheck').checked) {
        document.getElementById('UMPifYes').style.display = 'table-row';
    } else {
        document.getElementById('UMPifYes').style.display = 'none';
    }
}


function Applicationcheck() {
    if (document.getElementById('ApplicationYesCheck').checked) {
        document.getElementById('ApplicationifYes').style.display = 'table-row';
        document.getElementById('ApplicationifNo').style.display = 'none';
        document.getElementById("submitForm").removeAttribute("disabled");
    } else {
        document.getElementById('ApplicationifYes').style.display = 'none';
        document.getElementById('ApplicationifNo').style.display = 'table-row';
        document.getElementById("submitForm").setAttribute("disabled", "disabled");
    }
}


function isNumberWithcoma(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    //console.log(charCode)
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        if (charCode == 44) {
            return true;
        }
        return false;
    }
    return true;
}

function isNumberLessThen(ths) {
    if (Number(ths.value) > 20) {
        document.getElementById("vCPU-valid").style.display = 'block';
        return true
    } else {
        document.getElementById("vCPU-valid").style.display = 'none';
        return false
    }
    return true

}

function isNumberLessThenRam(ths) {
    //console.log(ths.value)
    if (Number(ths.value) > 30) {
        document.getElementById("RAM-valid").style.display = 'block';
        return true
    } else {
        document.getElementById("RAM-valid").style.display = 'none';

        return false
    }
    return true

}



function isNumberLessThenDisk(ths) {
    if (Number(ths.value) > 100) {
        document.getElementById("disk-valid").style.display = 'block';
        return true
    } else {
        document.getElementById("disk-valid").style.display = 'none';
        return false
    }
    return true

}


function MesosCheck() {
    if (document.getElementById('MesosYes').checked) {
        document.getElementById('JustificatificationField').style.display = 'none';

    } else {
        document.getElementById('JustificatificationField').style.display = 'block';

    }
}
var tempArray = []

function fnPortArrayHandler(v) {
    for (var p = 0; p > tempArray.length; p++) {
        if (tempArray[p] == v) {
            return true
        }
    }
    return false

}

function portMatchingHandler(Array1, Array2) {
    tempArray = Array2;
    var match = true;
    for (var u = 0; u < Array2.length; u++) {
        match = true
        for (var s = 0; s < Array1.length; s++) {
            if (Array1[s] == Array2[u]) {
                match = false
            }
        }
        if (match == true) {
            return true
            break;
        }
    }
    return false;
}

function ServiceStatelessCheck() {
    if (document.getElementById('ServiceStateless').checked) {
        document.getElementById('StatelessIfyes').style.display = 'block';
        document.getElementById('StatefullifYes').style.display = 'none';
    } else {
        document.getElementById('StatelessIfyes').style.display = 'none';
        document.getElementById('StatefullifYes').style.display = 'block';
        var myform1 = document.forms["myForm"]
        myform1["fn-stateless-Ports"].value = "";
        myform1["fn-Static-Ports"].value = "";
        myform1["fn-Dynamic-Ports"].value = ""
    }
}


