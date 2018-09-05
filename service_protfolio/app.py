from flask import Flask, render_template, redirect, url_for, request
from flask_mysqldb import MySQL

app = Flask(__name__)
mysql = MySQL(app)

# MySQL config
app.config['MYSQL_HOST'] = '127.0.0.1'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'sp'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

# Home page loads here
@app.route('/')
def home():
    cur = mysql.connection.cursor()
    cur.execute("SELECT idpservicename FROM sp.opdoc;")
    idplist = cur.fetchall()
    cur.close()
    return render_template('Home.html', idplist=idplist)

# Show Submitted Form data
@app.route('/showform', methods=['POST', 'GET'])
def showform():
    if request.method == 'POST':
        _subform = request.form['fn-subform']
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM sp.opdoc WHERE idpservicename = '%s'" % _subform)
    formdata = cur.fetchall()
    cur.close()
    print formdata
    return render_template('Show_Form.html', formdata=formdata, _subform=_subform)

# Operability Form loads from here
@app.route('/operability/')
def operability():
    #return render_template('Operability_Doc.html')
    return render_template(
        'Operability_Doc.html',
        vertical_data=[{'name': 'Bizops-rna'}, {'name': 'Demand'}, {'name': 'GUD'},
                       {'name': 'IDSP'}, {'name': 'PSO'}, {'name': 'Supply'},
                       {'name': 'Wadago'}, {'name': 'PE'}],
        colo_phy=[{'phy': 'DFW1'}, {'phy': 'DFW2'}, {'phy': 'PEK1'}],
        colo_cloud=[{'cloud': 'AMS1'}, {'cloud': 'WO1'}, {'cloud': 'SG1'}, {'cloud': 'WC1'},
                    {'cloud': 'EV1'}, {'cloud': 'TK1'}, {'cloud': 'IR1'}]
    )


# Task Form Class
#class spForm(Form):
#servicename = StringField('New-IDP-Service-Name', [validators.Length(min=1, max=55)])

#Operability Form Submitting
@app.route('/submit', methods=['POST', 'GET'])
def submit():
    #_idpservicename = request.form['fn-name']
    if request.method == 'POST':
        # name tag in HTML is used to collect the data
        _idpservicename = request.form['fn-name']
        _vertical = request.form['fn-vertical']
        _productowner = request.form['fn-product-owner']
        _engineeringmanager = request.form['fn-engineering-manager']
        _lobhead = request.form['fn-lob-head']
        _prddoc = request.form['fn-prd-doc']
        _designdoc = request.form['fn-design-doc']
        _architect = request.form['fn-architect']
        _teamemail = request.form['fn-team-email']
        _listtech = request.form['fn-list']
        # Collecting the info from the checkbox
        _colos = request.form.getlist('colos')
        _cololist = ','.join(_colos)
        # Getting the expected qps on the dictionary
        _expectedqps = {}
        print _colos
        for _colo in _colos:
            _concat = str("fn-expected-") + str(_colo)
            _expectedqps[_colo] = request.form[_concat]
            print _expectedqps
        _externalYesno = request.form.get('externalYesno')
        _Infosecyesno = request.form.get('Infosecyesno')
        _Infosecjira = request.form['fn-Jira']
        _domainuri = request.form['fn-domain']
        _certendpoint = request.form['fn-certs']
        # Collecting the details HTTP and HTTPs requests to single column
        _requests = ['fn-http', 'fn-http-non']
        _requestplit = {}
        for _request in _requests:
            _requestplit[_request] = request.form[_request]
            #print _requestplit
        _UMP = request.form.get('UMP')
        _UMPtraffic = {}
        for _colo in _colos:
            _concat = str("fn-traffic-") + str(_colo)
            _UMPtraffic[_colo] = request.form[_concat]
            # print _UMPtraffic
        _QAdeployed = request.form.get('Application')
        _Appurl = request.form.get('fn-qa')
        _Hawkeyelnk = request.form.get('fn-hawkeye-link')
        _Instancecolo = {}
        for _colo in _colos:
            _concat = str("fn-instances-") + str(_colo)
            _Instancecolo[_colo] = request.form[_concat]
            # print _Instancecolo
        #_specs = {"vCPU":"vCPU", "Ram":"Ram", "Disk":"Disk", "QPS":"QPS"}
        _specs = ['vCPU','RAM','Disk','QPS']
        _hwspecs = {}
        for _req in _specs:
            _concat = str("fn-") + str(_req)
            _hwspecs[_req] = request.form[_concat]
            print _hwspecs
        _nwbandwidth = request.form['networkBandwidth']
        _multithread = request.form.get('Multithread')
        _concurrency = request.form.get('Concurrency')
        _dockerlnk = request.form.get('fn-Docker')
        _healthchecklnk = request.form.get('fn-Healthcheck')
        _healthcheckurl = request.form.get('fn-Healthcheck-URL')
        _upstream = request.form.get('fn-Upstream')
        _downstream = request.form.get('fn-Downstream')
        _servicetype = request.form.get('Service')
        _mesoscompl = request.form.get('Mesos')
        _justification = request.form.get('fn-justificatification')
        _ports = request.form.get('fn-stateless-Ports')
        _staticports = request.form.get('fn-Static-Ports')
        _dynamicports = request.form.get('fn-Dynamic-Ports')
        _statefulproperties = request.form.get('fn-Statefull-properties')
        _autostart = request.form.get('Autostart')
        _statefulports = request.form.get('fn-Statefull-Ports')
        _portno = request.form.get('fn-Port')
        _zkdiscoverable = request.form.get('fn-Discoverable')
        _specialsetup = request.form.get('fn-Special')
        _implogs = request.form.get('fn-Important')
        _logrotation = request.form.get('Rotation')
        _exceptioncount = request.form.get('Exception')
        _starttime = request.form.get('fn-Service')
        _gracetime = request.form.get('fn-Graceful')
        _healthcheckconfig = request.form.get('health')
        _draininflight = request.form.get('Drain')
        _crashanalysis = request.form.get('crashed')
        _hawkeyeendpoint = request.form['fn-Hawkeye']
        _metricsinstance = request.form['fn-Metrics']
        _topmetrics = request.form['fn-top-Metrics']
        _topbusinessmetrics = request.form['fn-business-Metrics']
        _alertthreshold = request.form['fn-Thresholds']
        _pagerduty = request.form['fn-Pagerduty']


        # INSERT Operation from above variables
        cur = mysql.connection.cursor()
        #cur.execute('INSERT INTO test (idpservicename, vertical) VALUES (%s, %s)', [_idpservicename, _vertical])
        cur.execute('INSERT INTO opdoc (idpservicename, vertical, productowner, engineeringmanager, '
                    'lobhead, prddoc, designdoc, architect, teamemail, listtech, colos, expectedqps, externalyesno,'
                    'Infosecyesno, Infosecjira, domainuri, certendpoint, requestplit, UMP, UMPtraffic, QAdeployed, Appurl, '
                    'Hawkeyelnk, Instancecolo, HWspecs, NWbandwidth, multithread, concurrency, dockerlnk, healthchecklnk,'
                    'healthcheckurl, upstream, downstream, servicetype, mesoscompl, justification, ports, staticports,'
                    'dynamicports, statefulproperties, autostart, statefulports, portno, zkdiscoverable, specialsetup,'
                    'implogs, logrotation, exceptioncount, starttime, gracetime, healthcheckconfig, drainflight, '
                    'crashanalysis, hawkeyeendpoint, metricsinstance, topmetrics, topbusinessmetrics, alertthreshold, pagerduty)'
                    'VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s,%s, %s, %s, %s, %s, '
                    '%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s,'
                    '%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)',
                    [_idpservicename, _vertical, _productowner, _engineeringmanager, _lobhead, _prddoc, _designdoc,
                     _architect, _teamemail, _listtech, _cololist, _expectedqps, _externalYesno, _Infosecyesno,
                     _Infosecjira, _domainuri, _certendpoint, _requestplit, _UMP, _UMPtraffic, _QAdeployed, _Appurl,
                     _Hawkeyelnk, _Instancecolo, _hwspecs, _nwbandwidth, _multithread, _concurrency, _dockerlnk,
                     _healthchecklnk, _healthcheckurl, _upstream, _downstream, _servicetype, _mesoscompl,
                     _justification, _ports, _staticports, _dynamicports, _statefulproperties, _autostart, _statefulports,
                     _portno, _zkdiscoverable, _specialsetup, _implogs, _logrotation, _exceptioncount, _starttime,
                     _gracetime, _healthcheckconfig, _draininflight, _crashanalysis, _hawkeyeendpoint, _metricsinstance,
                     _topmetrics, _topbusinessmetrics, _alertthreshold, _pagerduty])
        mysql.connection.commit()
        cur.close()
        #return '<h1> Done </h1>'
        return render_template('Submitted_data.html',
                               _idpservicename=_idpservicename,
                               _vertical=_vertical,
                               _productowner=_productowner,
                               _engineeringmanager=_engineeringmanager,
                               _lobhead=_lobhead,
                               _prddoc=_prddoc,
                               _designdoc=_designdoc,
                               _architect=_architect,
                               _teamemail=_teamemail,
                               _listtech=_listtech,
                               _colos=_colos,
                               _cololist=_cololist,
                               _expectedqps=_expectedqps,
                               _externalYesno=_externalYesno,
                               _Infosecyesno=_Infosecyesno,
                               _Infosecjira=_Infosecjira,
                               _domainuri=_domainuri,
                               _certendpoint=_certendpoint,
                               _requestplit=_requestplit,
                               _UMP=_UMP,
                               _UMPtraffic=_UMPtraffic,
                               _QAdeployed=_QAdeployed,
                               _Appurl=_Appurl,
                               _Hawkeyelnk=_Hawkeyelnk,
                               _Instancecolo=_Instancecolo,
                               _hwspecs=_hwspecs,
                               _nwbandwidth=_nwbandwidth,
                               _multithread=_multithread,
                               _concurrency=_concurrency,
                               _dockerlnk=_dockerlnk,
                               _healthchecklnk=_healthchecklnk,
                               _healthcheckurl=_healthcheckurl,
                               _upstream=_upstream,
                               _downstream=_downstream,
                               _servicetype=_servicetype,
                               _mesoscompl=_mesoscompl,
                               _justification=_justification,
                               _ports=_ports,
                               _staticports=_staticports,
                               _dynamicports=_dynamicports,
                               _statefulproperties=_statefulproperties,
                               _autostart=_autostart,
                               _statefulports=_statefulports,
                               _portno=_portno,
                               _zkdiscoverable=_zkdiscoverable,
                               _specialsetup=_specialsetup,
                               _implogs=_implogs,
                               _logrotation=_logrotation,
                               _exceptioncount=_exceptioncount,
                               _starttime=_starttime,
                               _gracetime=_gracetime,
                               _healthcheckconfig = _healthcheckconfig,
                               _draininflight = _draininflight,
                               _crashanalysis = _crashanalysis,
                               _hawkeyeendpoint = _hawkeyeendpoint,
                               _metricsinstance = _metricsinstance,
                               _topmetrics = _topmetrics,
                               _topbusinessmetrics = _topbusinessmetrics,
                               _alertthreshold = _alertthreshold,
                               _pagerduty = _pagerduty)

#############################################################################################################

# Handling random URIs
@app.route('/success/<name>')
def success(name):
    #return 'welcome %s' % name
    return render_template('Random_URI.html', name=name)

#@app.route('/<name>/')
#def random_name(name):
#    return render_template('Random_URI.html',name=name)
#    # return redirect(url_for('home', name=name))
#    # return 'Hello %s!, you have typed wrong URI' % name

#Check DB data
@app.route('/DBDATA')
def DBDATA():
    cur = mysql.connection.cursor()
    #cur.execute('SELECT id, idpservicename, vertical, productowner, engineeringmanager, register_date FROM test')
    #cur.execute('SELECT id, idpservicename, vertical, productowner, engineeringmanager, lobhead, prddoc, designdoc, architect, teamemail, listtech FROM test')
    cur.execute('SELECT id, idpservicename, vertical, teamemail, listtech, colos, expectedqps, externalyesno, '
                'Infosecyesno, Infosecjira, domainuri, certendpoint, requestplit, UMP, UMPtraffic, QAdeployed, Appurl, '
                'Hawkeyelnk, Instancecolo, HWspecs, NWbandwidth, multithread, concurrency, dockerlnk, healthchecklnk,'
                'healthcheckurl, upstream, downstream, servicetype, mesoscompl, justification, ports, staticports,'
                'dynamicports, statefulproperties, autostart, statefulports, portno, zkdiscoverable, specialsetup, implogs,'
                'logrotation, exceptioncount, starttime, gracetime, healthcheckconfig, drainflight, crashanalysis,'
                'hawkeyeendpoint, metricsinstance, topmetrics, topbusinessmetrics, alertthreshold, pagerduty FROM opdoc')
    rv = list(cur.fetchall())
    cur.close()
    return '<h1>' + str(rv) + '</h1>'

#Insert data to database, verify the connection
#@app.route('/ADDDATA/<string:insert>')
#def ADDDATA(insert):
#    cur = mysql.connection.cursor()
#    cur.execute('INSERT INTO test (idpservicename) VALUES (%s)', [insert])
#    mysql.connection.commit()
#    cur.close()
#    return '<h1> Done </h1>'

###########################################################################################################

# Initialisation of Application
if __name__ == '__main__':
    app.run(host='0.0.0.0', port='8080', debug='true')
