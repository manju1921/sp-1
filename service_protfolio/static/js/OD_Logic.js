function yesnoCheck() {
    if (document.getElementById('yesCheck').checked) {
        document.getElementById('ifYes').style.display = 'block';
		document.getElementById('ifno').style.display = 'none';
    } else {
        document.getElementById('ifYes').style.display = 'none';
		document.getElementById('ifno').style.display = 'block';
    }
}

function umpcheck() {
    if (document.getElementById('UMPyesCheck').checked) {
        document.getElementById('UMPifYes').style.display = 'block';
    } else {
        document.getElementById('UMPifYes').style.display = 'none';
    }
}

function Applicationcheck() {
    if (document.getElementById('ApplicationYesCheck').checked) {
        document.getElementById('ApplicationifYes').style.display = 'block';
        document.getElementById('ApplicationifNo').style.display = 'none';
		document.getElementById("submitForm").removeAttribute("disabled");
    } else {
        document.getElementById('ApplicationifYes').style.display = 'none';
        document.getElementById('ApplicationifNo').style.display = 'block';
		document.getElementById("submitForm").setAttribute("disabled", "disabled");
    }
}

function InfosecyesnoCheck() {
    if (document.getElementById('InfosecyesCheck').checked) {
        document.getElementById('InfosecifYes').style.display = 'block';
        document.getElementById('InfosecifNo').style.display = 'none';
		document.getElementById("submitForm").removeAttribute("disabled");
    } else {
        document.getElementById('InfosecifYes').style.display = 'none';
        document.getElementById('InfosecifNo').style.display = 'block';
		document.getElementById("submitForm").setAttribute("disabled", "disabled");
    }
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

function ValidateEmail(inputText) {
    //console.log(inputText)
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //if (inputText.match(mailformat)) {
if (inputText.indexOf("@") == -1 && inputText.indexOf(".") == -1) {

        document.getElementById('valid-email').style.display = 'none';
    } else {

        document.getElementById('valid-email').style.display = 'block';

    }
}
var temp = []
function handleClick(ele){
	//console.log(ele.value+" "+ele.checked)
	   //console.log(temp.indexOf(ele.value))		
	   
	   if(ele.checked){
		   
	   }
	   var index = temp.indexOf(ele.value)
		if (index > -1) {
		  temp.splice(index, 1);
		}else{
			temp.push(ele.value)
		}

		//console.log(temp)
		//document.getElementById("fn-expected").value = temp.join(",")
		//document.getElementById("fn-traffic").value = temp.join(",")
		
	    var ele = document.getElementById('fn-expected-container')	
	    while (ele.firstChild) {
			ele.removeChild(ele.firstChild);
		}
		for(var i=0;i<temp.length;i++){
		  createTextBox(temp[i],ele,"fn-expected-")		
		}
		
		var ele = document.getElementById('fn-traffic-container')	
	    while (ele.firstChild) {
			ele.removeChild(ele.firstChild);
		}
		for(var i=0;i<temp.length;i++){
		  createTextBox(temp[i],ele,"fn-traffic-")		
		}
		
		var ele = document.getElementById('fn-instances-container')	
	    while (ele.firstChild) {
			ele.removeChild(ele.firstChild);
		}
		for(var i=0;i<temp.length;i++){
		  createTextBox(temp[i],ele,"fn-instances-")		
		}
		
		//fn-traffic
		
	
	
	
}
var fnExpectedArray =[]
var fnTrafficArray =[]
var fnInstancesArray =[]



function createTextBox(name,ele,field){
	
	var div = document.createElement("div");     
    div.className = "form-group";	
	
	var label = document.createElement("label");     
	var t = document.createTextNode(name);    
	label.appendChild(t);                             
	div.appendChild(label);  

    var input = document.createElement("input");   
     input.className="form-control"
	 input.id= field+name
	 input.setAttribute("type", "text");	
	 input.setAttribute("name", field+name);		                           
	 div.appendChild(input);  	
	
	ele.appendChild(div);
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

function isNumberLessThen(ths){
	if(Number(ths.value) > 20 ){
		document.getElementById("vCPU-valid").style.display = 'block';
		return true
	}else{
	   document.getElementById("vCPU-valid").style.display = 'none';
        return false	   
	}
	return true
	
}
function isNumberLessThenRam(ths){
	//console.log(ths.value)
	if(Number(ths.value) > 30 ){
		document.getElementById("RAM-valid").style.display = 'block';
		return true
	}else{
	   document.getElementById("RAM-valid").style.display = 'none';	
	   
	   return false
	}
	return true
	
}



function isNumberLessThenDisk(ths){
	if(Number(ths.value) > 100 ){
		document.getElementById("disk-valid").style.display = 'block';
		return true
	}else{
	   document.getElementById("disk-valid").style.display = 'none';	
	   return false
	}
	return true
	
}


function MesosCheck(){
	 if (document.getElementById('MesosYes').checked) {
        document.getElementById('JustificatificationField').style.display = 'none';
      
    } else {
        document.getElementById('JustificatificationField').style.display = 'block';
       
    }
}
var tempArray = []
function fnPortArrayHandler(v){
				for(var p=0;p>tempArray.length;p++){
					if(tempArray[p] == v){
						return true
					}
				}
				return false
					
				}
function portMatchingHandler(Array1,Array2){
	 tempArray = Array2;
	 //console.log(Array1)
	 	 //console.log(Array2)
	var match = true;
	for(var u=0;u<Array2.length;u++){
		     match = true
			for(var s=0;s<Array1.length;s++){
				//console.log(s+" "+u )
				//console.log(Array1[s]+" "+Array2[u] )
				if(Array1[s] == Array2[u]){
					//console.log("ok---")
			        match = false	
                   //break;				  
				}
				//alert(" ports should not be match No. of ports used")
     		}
			//console.log(match)
          if(match == true){
			  return true
			  break;
		  }			
			
	}
	
	return false;
	
	/**/
	
	/* var result =  Array1.every(function (v) {
		 console.log(v+" "+Array2.indexOf(v)) 
        return Array2.indexOf(v) >= 0;
    });*/
	
	
			//var result =  Array1.every(fnPortArrayHandler)
			//console.log("result==="+result)
				
				
	
	
	
	
	
}
function validateForm(e) {
    e.preventDefault();
    var data = {}
	var myform = document.forms["myForm"]
    var fnName = myform["fn-name"].value;
    //var fnVertical = myform["fn-vertical"].value;
	var fnVertical = document.getElementById("fn-vertical");

    var productOwner = myform["fn-product-owner"].value;
    var engineeringManager = myform["fn-engineering-manager"].value;
    var lobHead = myform["fn-lob-head"].value;
    var prdDoc = myform["fn-prd-doc"].value;
    var designDoc = myform["fn-design-doc"].value;
    var architect = myform["fn-architect"].value;
    var email = myform["fn-team-email"].value;
    var fnList = myform["fn-list"].value;
    var fnexternalYesno = myform["externalYesno"];
    var fncolos = myform["colos"];
    var fncolos_flag = false
    for (var i = 0; i < fncolos.length; i++) {
        if (fncolos[i].checked == true) {
            fncolos_flag = true;
            break;
        }
    }
    var colo = ""
    //console.log(fncolos)
    for (var i = 0; i < fncolos.length; i++) {
        if (fncolos[i].checked == true) {
            //console.log("fncolos[i].value==%O",fncolos[i].value)
            colo += fncolos[i].value + ","

        }
    }
    //console.log("dd%o",fnexternalYesno)
    //var fnExpected = myform["fn-expected"].value;
    var fnInfosecyesno = myform["Infosecyesno"];
    var fnJira = myform["fn-Jira"].value;
    var fnDomain = myform["fn-domain"].value;
    var fnCerts = myform["fn-certs"].checked;
    var fnHttp = myform["fn-http"].value;
	var fnHttpnon = myform["fn-http-non"].value;
	
    var fnUMP = myform["UMP"];
    //var fnTraffic = myform["fn-traffic"].value;
    var fnApplication = myform["Application"];

    var fnQa = myform["fn-qa"].value;
    var fnHawkeyelink = myform["fn-hawkeye-link"].value;
    //var fnInstances = myform["fn-instances"].value;
    var fnVCPU = myform["fn-vCPU"].value;
    var fnRAM = myform["fn-RAM"].value;
    var fnDisk = myform["fn-Disk"].value;
    var fnQPS = myform["fn-QPS"].value;
    var net = document.getElementById("networkBandwidth");
    //var strUser = net.options[net.selectedIndex].text;	
    var fnMultithread = myform["Multithread"];
    var fnConcurrency = myform["Concurrency"];
    var fnDocker = myform["fn-Docker"].value;
    var fnHealthcheck = myform["fn-Healthcheck"].value;
    var fnHealthcheckURL = myform["fn-Healthcheck-URL"].value;

    var fnUpstream = myform["fn-Upstream"].value;
    var fnDownstream = myform["fn-Downstream"].value;

    var fnServiceType = myform["Service"];
    var fnMesos = myform["Mesos"];
    var fnStatelessPorts = myform["fn-stateless-Ports"].value;
    var fnStaticPorts = myform["fn-Static-Ports"].value;
    var fnDynamicPorts = myform["fn-Dynamic-Ports"].value
	
	var fnStatefullProperties = myform["fn-Statefull-properties"].value

    var fnAutostart = myform["Autostart"];
    var fnStatefullPorts = myform["fn-Statefull-Ports"].value;
    var fnPort = myform["fn-Port"].value;

    var fnDiscoverable = myform["fn-Discoverable"].value;
    var fnSpecial = myform["fn-Special"].value;
    var fnImportant = myform["fn-Important"].value;

    var fnRotation = myform["Rotation"];
    var fnException = myform["Exception"];


    var fnService = myform["fn-Service"].value;
    var fnGraceful = myform["fn-Graceful"].value;

    var fnhealth = myform["health"];
    var fnDrain = myform["Drain"];
    var fncrashed = myform["crashed"];

    var fnHawkeye = myform["fn-Hawkeye"].value;
    var fnMetrics = myform["fn-Metrics"].value;
    var fnTopMetrics = myform["fn-top-Metrics"].value;
    var fnBusinessMetrics = myform["fn-business-Metrics"].value;
    var fnThresholds = myform["fn-Thresholds"].value;
    var fnPagerduty = myform["fn-Pagerduty"].value;



/*else if (ValidateName(fnName) == true) {
        document.getElementById("fn-name").focus();
        alert("New-IDP-Service-Name field LowerCase and '-' should be expected")
        return false;
    }*/
	
	
	
	
	
	//console.log(fnStatelessPortsArray)
	
    if (fnName == "") {
        document.getElementById("fn-name").focus();
        if (fnName == "") {
            alert("New-IDP-Service-Name must be filled out");
        }
        return false;
    }  else if ( fnVertical.selectedIndex == 0) {
        document.getElementById("fn-vertical").focus();
        alert("choose vertical");
        return false;
    } else if (productOwner == "") {
        document.getElementById("fn-product-owner").focus();
        alert("Product Owner must be filled out");
        return false;
    } else if (engineeringManager == "") {
        document.getElementById("fn-engineering-manager").focus();
        alert("Engineering-Manager must be filled out");
        return false;
    } else if (lobHead == "") {
        document.getElementById("fn-lob-head").focus();
        alert("Lob-Head must be filled out");
        return false;
    } else if (prdDoc == "") {
        document.getElementById("fn-prd-doc").focus();
        alert("PRD-Doc must be filled out");
        return false;
    } else if (designDoc == "") {
        document.getElementById("fn-design-doc").focus();
        alert("Design-Doc must be filled out");
        return false;
    } else if (architect == "") {
        document.getElementById("fn-architect").focus();
        alert("Architect must be filled out");
        return false;
    } else if (email == "") {
        document.getElementById("fn-team-email").focus();
        alert("Email must be filled out");
        return false;
    } else if (fnList == "") {
        document.getElementById("fn-list").focus();
        alert("List must be filled out");
        return false;
    } else if (fncolos_flag == false) {
        document.getElementById("colo-deployed").focus();
        alert("choose at least one Colo to be deployed on");
        return false;
    }  else if (fnexternalYesno[0].checked == false && fnexternalYesno[1].checked == false) {
        document.getElementById("yesCheck").focus();
        alert("choose External-Traffic-to-instance ");
        return false;
    } else if (fnexternalYesno[0].checked == true && fnInfosecyesno[0].checked == false && fnInfosecyesno[1].checked == false) {
        document.getElementById("InfosecyesCheck").focus();
        alert("choose Infosec-Reviewed ");
        return false;
    } else if (fnexternalYesno[0].checked == true && fnInfosecyesno[0].checked == true && fnJira == "") {
        document.getElementById("fn-Jira").focus();
        alert("choose Infosec-Jira ");
        return false;
    } else if (fnUMP[0].checked == false && fnUMP[1].checked == false) {
        document.getElementById("UMPyesCheck").focus();
        alert("UMP-Co-relation ");
        return false;
    } else if (fnApplication[0].checked == false && fnApplication[1].checked == false) {
        document.getElementById("ApplicationYesCheck").focus();
        alert("choose Application-QA-Deployed-Verified ");
        return false;
    } else if (fnApplication[0].checked == true && fnQa == "") {
        document.getElementById("fn-qa").focus();
        alert("QA-Application-URL must be filled out");
        return false;
    } else if (fnApplication[0].checked == true && fnHawkeyelink == "") {
        document.getElementById("fn-hawkeye-link").focus();
        alert("Hawkeye-benchmarking-lnk must be filled out");
        return false;
    } else if (fnApplication[0].checked == true && fnVCPU == "") {
        document.getElementById("fn-vCPU").focus();
        alert("vCPU-per-Machine must be filled out");
        return false;
    } else if (fnApplication[0].checked == true && fnRAM == "") {
        document.getElementById("fn-RAM").focus();
        alert("RAM-per-Machine must be filled out");
        return false;
    } else if (fnApplication[0].checked == true && fnDisk == "") {
        document.getElementById("fn-Disk").focus();
        alert("Disk-per-Machine must be filled out");
        return false;
    } else if (fnApplication[0].checked == true && fnQPS == "") {
        document.getElementById("fn-QPS").focus();
        alert("QPS-handled-per-box must be filled out");
        return false;
    } else if (fnApplication[0].checked == true && net.selectedIndex == 0) {
        document.getElementById("networkBandwidth").focus();
        alert("choose Network-Bandwidth-per-box ");
        return false;
    } else if (fnApplication[0].checked == true && fnMultithread[0].checked == false && fnMultithread[1].checked == false) {
        document.getElementById("MultithreadYesCeck").focus();
        alert("choose Multithread-Application ");
        return false;
    } else if (fnApplication[0].checked == true && fnConcurrency[0].checked == false && fnConcurrency[1].checked == false) {
        document.getElementById("ConcurrencyYesCeck").focus();
        alert("choose Concurrency-Expected ");
        return false;
    } else if (fnApplication[0].checked == true && fnDocker == "") {
        document.getElementById("fn-Docker").focus();
        alert("Docker-Git-Link must be filled out");
        return false;
    } else if (fnApplication[0].checked == true && fnHealthcheck == "") {
        document.getElementById("fn-Healthcheck").focus();
        alert("Healthcheck-Git-Link must be filled out");
        return false;
    } else if (fnApplication[0].checked == true && fnHealthcheckURL == "") {
        document.getElementById("fn-Healthcheck-URL").focus();
        alert("Healthcheck-URL must be filled out");
        return false;
    } else if (fnApplication[0].checked == true && fnServiceType[0].checked == false && fnServiceType[1].checked == false) {
        document.getElementById("ServiceStateless").focus();
        alert("Choose Service-Type");
        return false;
    } else if (fnApplication[0].checked == true && fnServiceType[0].checked == true && fnMesos[0].checked == false && fnMesos[1].checked == false) {
        document.getElementById("MesosYes").focus();
        alert("Choose Mesos-Complanant");
        return false;
    } else if (fnApplication[0].checked == true && fnServiceType[0].checked == true && fnMesos[0].checked == false && fnMesos[1].checked == true) {
        document.getElementById("fn-justificatification").focus();
        alert("justificatification must be filled out");
        return false;
    }else if (fnApplication[0].checked == true && fnServiceType[0].checked == true && fnStatelessPorts == "") {
        document.getElementById("fn-stateless-Ports").focus();
        alert("No. of Ports used must be filled out");
        return false;
    } else if (fnApplication[0].checked == true && fnServiceType[0].checked == true && fnStaticPorts == "") {
        document.getElementById("fn-Static-Ports").focus();
        alert("Static-Ports must be filled out");
        return false;
    } else if (fnApplication[0].checked == true && fnServiceType[0].checked == true && fnDynamicPorts == "") {
        document.getElementById("fn-Dynamic-Ports").focus();
        alert("Dynamic-Ports must be filled out");
        return false;
    } else if (fnApplication[0].checked == true && fnServiceType[1].checked == true && fnAutostart[0].checked == false && fnAutostart[1].checked == false) {
        document.getElementById("fnAutostartYes").focus();
        alert("Choose Autostart-VM-reboots");
        return false;
    } else if (fnApplication[0].checked == true && fnServiceType[1].checked == true && fnStatefullPorts == "") {
        document.getElementById("fn-Statefull-Ports").focus();
        alert("No. of Ports used must be filled out");
        return false;
    } else if (fnApplication[0].checked == true && fnServiceType[1].checked == true && fnPort == "") {
        document.getElementById("fn-Port").focus();
        alert("Port No's must be filled out");
        return false;
    } else if (fnApplication[0].checked == true && fnDiscoverable == "") {
        document.getElementById("fn-Discoverable").focus();
        alert("ZK-Discoverable-Path must be filled out");
        return false;
    } else if (fnApplication[0].checked == true && fnImportant == "") {
        document.getElementById("fn-Important").focus();
        alert("List [Important-Logs] must be filled out");
        return false;
    } else if (fnApplication[0].checked == true && fnRotation[0].checked == false && fnRotation[1].checked == false) {
        document.getElementById("RotationYes").focus();
        alert("choose Log-Rotation-Setup ");
        return false;
    } else if (fnApplication[0].checked == true && fnException[0].checked == false && fnException[1].checked == false) {
        document.getElementById("ExceptionYes").focus();
        alert("choose Exception-Counting-Enabled ");
        return false;
    } else if (fnApplication[0].checked == true && fnService == "") {
        document.getElementById("fn-Service").focus();
        alert("Service-Startup-time must be filled out");
        return false;
    } else if (fnApplication[0].checked == true && fnGraceful == "") {
        document.getElementById("fn-Graceful").focus();
        alert("Graceful-shutdown-time must be filled out");
        return false;
    } else if (fnApplication[0].checked == true && fnhealth[0].checked == false && fnhealth[1].checked == false) {
        document.getElementById("healthYes").focus();
        alert("choose URL to enable/disable health check ");
        return false;
    } else if (fnApplication[0].checked == true && fnDrain[0].checked == false && fnDrain[1].checked == false) {
        document.getElementById("DrainYes").focus();
        alert("choose Drain-inflight-traffic ");
        return false;
    } else if (fnApplication[0].checked == true && fncrashed[0].checked == false && fncrashed[1].checked == false) {
        document.getElementById("crashedYes").focus();
        alert("choose 'Will the service come up in case it crashed earlier'");
        return false;
    } else if (fnApplication[0].checked == true && fnHawkeye == "") {
        document.getElementById("fn-Hawkeye").focus();
        alert("Hawkeye-Endpoint must be filled out");
        return false;
    } else if (fnApplication[0].checked == true && fnMetrics == "") {
        document.getElementById("fn-Metrics").focus();
        alert("Metrics-Sent-Per-Instance must be filled out");
        return false;
    } else if (fnApplication[0].checked == true && fnTopMetrics == "") {
        document.getElementById("fn-top-Metrics").focus();
        alert("Top-metrics must be filled out");
        return false;
    } else if (fnApplication[0].checked == true && fnBusinessMetrics == "") {
        document.getElementById("fn-business-Metrics").focus();
        alert("Top-business-metrics-to-watch must be filled out");
        return false;
    } else if (fnApplication[0].checked == true && fnThresholds == "") {
        document.getElementById("fn-Thresholds").focus();
        alert("Thresholds-for-alerts must be filled out");
        return false;
    } else if (fnApplication[0].checked == true && fnPagerduty == "") {
        document.getElementById("fn-Pagerduty").focus();
        alert("Pagerduty-enabled must be filled out");
        return false;
    } else if (fnApplication[1].checked == true) {
        //return true;
        prepareData()
    } else {
     		console.log("fnStatelessPorts==%o",fnStatelessPorts)
			if(fnDocker.indexOf('github.corp.inmobi.com') == -1){
				 document.getElementById("fn-Docker").focus();
				 alert("Docker-Git-Link is invalid");
				 return false
			}
			
			if(fnHealthcheck.indexOf('github.corp.inmobi.com') == -1){
				document.getElementById("fn-Healthcheck").focus();
				 alert("Healthcheck-Git-Link is invalid");
				 return false
			}
			if(fnStatelessPorts.trim() != ""){
					var fnStatelessPortsArray = fnStatelessPorts.split(","); 
					for(var j=0;j<fnStatelessPortsArray.length;j++){
						if(fnStatelessPortsArray[j] == ""){
							fnStatelessPortsArray.splice(j,1)
							j--;
						}
						
					}
			}
			
			if(fnStaticPorts.trim() != ""){
					var fnStaticPortsArray = fnStaticPorts.split(","); 
					for(var k=0;k<fnStaticPortsArray.length;k++){
						if(fnStaticPortsArray[k] == ""){
							fnStaticPortsArray.splice(k,1)
							k--;
						}
						
						
					}			
					
					var result = portMatchingHandler(fnStatelessPortsArray,fnStaticPortsArray)
								if(result){
									alert(" Static port should not be match No. of ports used")
									return false
								}
					
					
			}
			
			if(fnDynamicPorts.trim() != ""){
					var fnDynamicPortsArray = fnDynamicPorts.split(","); 
					for(var l=0;l<fnDynamicPortsArray.length;l++){
						if(fnDynamicPortsArray[l] == ""){
							fnDynamicPortsArray.splice(l,1)
							l--;
						}
						
					}
					
					var result = portMatchingHandler(fnStatelessPortsArray,fnDynamicPortsArray)
								if(result){
									alert(" Dynamic port should not be match No. of ports used")
									return false
								}
					
					
			}
			
			
			if(fnStatefullPorts.trim() != ""){
					var fnStatefullPortsArray = fnStatefullPorts.split(","); 
					for(var q=0;q<fnStatefullPortsArray.length;q++){
						if(fnStatefullPortsArray[q] == ""){
							fnStatefullPortsArray.splice(q,1)
							q--;
						}
						
					}
					
					
			}
			
			if(fnPort.trim() != ""){
					var fnPortArray = fnPort.split(","); 
					for(var t=0;t<fnPortArray.length;t++){
						if(fnPortArray[t] == ""){
							fnPortArray.splice(t,1)
							t--;
						}
						
					}
					
					var result = portMatchingHandler(fnStatefullPortsArray,fnPortArray)
					if(result){
						alert(" ports should not be match No. of ports used")
						return false
					}
					
			}
        
    }
    
	
	
	prepareData()
    function prepareData() {


        data.newIDPServiceName = fnName;
        data.vertical = fnVertical;
        data.productOwner = productOwner;
        data.engineeringManager = engineeringManager;
        data.lobHead = lobHead;
        data.prdDoc = prdDoc;
        data.designDoc = designDoc;
        data.architect = architect;
        data.teamEmail = email;
        data.listTechnologyStacks = fnList;
        data.coloToBeDeployed = colo;
        //data.expectedQps = fnExpected;
        data.externalTrafficToInstance = fnexternalYesno.value
        data.infosecReviewed = fnInfosecyesno.value
        data.infosecJira = fnJira
        data.domainEndpointURI = fnDomain;
        data.certsForEndpoint = fnCerts;
        data.httpHttpsRequestSplit = fnHttp;
		data.httpHttpsRequestSplitNon = fnHttpnon;
        data.umpCorelation = fnUMP.value;
        data.applicationQaDeployedVerified = fnApplication.value;

        if (fnApplication.value == "Yes") {
            data.qaApplicationUrl = fnQa;
            data.hawkeyeBenchmarkingLnk = fnHawkeye;
           // data.instancesPerColo = fnInstances;
            data.vcpuPerMachine = fnVCPU;
            data.ramPerMachine = fnRAM;
            data.diskPerMachine = fnDisk;
            data.qpsHandledPerBox = fnQPS;
            data.networkBandwidthPerBox = net.options[net.selectedIndex].text;
            data.multithreadApplication = fnMultithread.value;
            data.concurrencyxpected = fnConcurrency.value;
            data.dockerGitLink = fnDocker;
            data.healthcheckGitLink = fnHealthcheck;


            data.healthcheckUrl = fnHealthcheckURL
            data.upstreamServices = fnUpstream
            data.downstreamServices = fnDownstream

            data.serviceType = fnServiceType.value

            if (data.serviceType == "Stateless") {
                data.mesosComplanant = fnMesos.value
                data.statelessNoOfPortsUsed = fnStatelessPorts
                data.staticPorts = fnStaticPorts
                data.dynamicPorts = fnDynamicPorts
            } else {
                data.mesosComplanant = null
                data.statelessNoOfPortsUsed = null
                data.staticPorts = null
                data.dynamicPorts = null
            }

            if (data.serviceType == "Statefull") {
				data.callServiceStateful = fnStatefullProperties
                data.autostartVmReboots = fnAutostart
                data.statefullNoOfPortsUsed = fnStatefullPorts
                data.portNo = fnPort
            } else {
				data.callServiceStateful = null
                data.autostartVmReboots = null
                data.statefullNoOfPortsUsed = null
                data.portNo = null
            }




            data.zkDiscoverablePath = fnDiscoverable
            data.specialSetupOnBox = fnSpecial
            data.listImportantLogs = fnImportant
            data.logRotationSetup = fnRotation.value
            data.exceptionCountingEnabled = fnException.value
            data.serviceStartupTime = fnService
            data.gracefulShutdownTime = fnGraceful
            data.urlToEnable = fnhealth.value
            data.drainInflightTraffic = fnDrain.value
            data.willTheService = fncrashed.value
            data.hawkeyeEndpoint = fnHawkeye
            data.metricsSentPerInstance = fnMetrics
            data.topMetrics = fnTopMetrics
            data.topBusinessMetricsToWatch = fnBusinessMetrics
            data.thresholdsForAlerts = fnThresholds
            data.pagerdutyEnabled = fnPagerduty

        } else {
            data.qaApplicationUrl = null;
            data.hawkeyeBenchmarkingLnk = null;
           // data.instancesPerColo = null;
            data.vcpuPerMachine = null;
            data.ramPerMachine = null;
            data.diskPerMachine = null;
            data.qpsHandledPerBox = null;
            data.networkBandwidthPerBox = null;
            data.multithreadApplication = null;
            data.concurrencyxpected = null;
            data.dockerGitLink = null;
            data.healthcheckGitLink = null;


            data.healthcheckUrl = null
            data.upstreamServices = null
            data.downstreamServices = null

            data.serviceType = null
            data.mesosComplanant = null
            data.statelessNoOfPortsUsed = null
            data.staticPorts = null
            data.dynamicPorts = null

            data.autostartVmReboots = null
            data.statefullNoOfPortsUsed = null
            data.portNo = null


            data.zkDiscoverablePath = null
            data.specialSetupOnBox = null
            data.listImportantLogs = null
            data.logRotationSetup = null
            data.exceptionCountingEnabled = null
            data.serviceStartupTime = null
            data.gracefulShutdownTime = null
            data.urlToEnable = null
            data.drainInflightTraffic = null
            data.willTheService = null
            data.hawkeyeEndpoint = null
            data.metricsSentPerInstance = null
            data.topMetrics = null
            data.topBusinessMetricsToWatch = null
            data.thresholdsForAlerts = null
            data.pagerdutyEnabled = null
        }

		// send the data to server 
       
		//alert(JSON.stringify(data));
		 fnExpectedArray =[]
		 fnTrafficArray =[]
		 fnInstancesArray =[]
		var myform = document.forms["myForm"]
		for(var i=0;i<temp.length;i++){
			  var fnExpectedData = myform["fn-expected-"+temp[i]].value;		
			  var fnTrafficData = myform["fn-traffic-"+temp[i]].value;
			  var fnInstancesData = myform["fn-instances-"+temp[i]].value;
			  fnExpectedArray.push({name:temp[i],value:fnExpectedData})
			  fnTrafficArray.push({name:temp[i],value:fnTrafficData})
			  fnInstancesArray.push({name:temp[i],value:fnInstancesData})
			  
			  
		}
		
		data.row15 = fnExpectedArray
		data.row23 = fnTrafficArray
		data.row27 = fnInstancesArray
		 console.log(data)
		
		


    }

}



function ValidateName(val, evt) {
	console.log("here--------")
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    //console.log(val.indexOf('-') >= 0)
    //console.log(val == val.toLowerCase())
    /*if (val == "") {
        document.getElementById('serviceNameId').style.display = 'none';
        return true;
    }*/
    /*if ( val.indexOf('-') >= 0) {
        document.getElementById('serviceNameId').style.display = 'none';
        return false;
    } else {
        document.getElementById('serviceNameId').style.display = 'block';
        return true;
    }*/
	
	//console.log(charCode) 
	//console.log(charCode > 64)
	//console.log(charCode < 91)
	//console.log(charCode > 96)
	//console.log(charCode < 123)
	if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 45 ){
		console.log("---")
		document.getElementById('serviceNameId').style.display = 'none';
		return true;
	}else{
		console.log("--SS")
		document.getElementById('serviceNameId').style.display = 'block';
		return false;
		
		
	}
                    
                
                    
				
				
    return true;
}