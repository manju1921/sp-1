import MySQLdb

conn=MySQLdb.connect(host='localhost',user='root',passwd='')
cursor = conn.cursor()
cursor.execute('CREATE DATABASE IF NOT EXISTS sp')
cursor.execute('USE sp')
first_row = 'CREATE TABLE IF NOT EXISTS opdoc(id int(11) AUTO_INCREMENT PRIMARY KEY, idpservicename varchar(30), vertical varchar(15), productowner varchar(15), engineeringmanager varchar(30), lobhead varchar(30), prddoc varchar(150), designdoc varchar(150), architect varchar(30), teamemail varchar(40), listtech varchar(40), colos varchar(40), expectedqps varchar(200), externalyesno varchar(20), Infosecyesno varchar(20), Infosecjira varchar(20), domainuri varchar(50), certendpoint varchar(10), requestplit varchar(100), UMP varchar(100), UMPtraffic varchar(100), QAdeployed varchar(10), Appurl varchar(100), Hawkeyelnk varchar(100), Instancecolo varchar(100), HWspecs varchar(100), NWbandwidth varchar(20), multithread varchar(10), concurrency varchar(10), dockerlnk varchar(100), healthchecklnk varchar(100), healthcheckurl varchar(100), upstream varchar(100), downstream varchar(100), servicetype varchar(10), mesoscompl varchar(10), justification varchar(100), ports varchar(10), staticports varchar(10), dynamicports varchar(10), statefulproperties varchar(100), autostart varchar(10), statefulports varchar(10), portno varchar(30), zkdiscoverable varchar(100), specialsetup varchar(100), implogs varchar(100), logrotation varchar(10), exceptioncount varchar(10), starttime varchar(10), gracetime varchar(10), healthcheckconfig varchar(10), drainflight varchar(10), crashanalysis varchar(10), hawkeyeendpoint varchar(100), metricsinstance varchar(100), topmetrics varchar(100), topbusinessmetrics varchar(100), alertthreshold varchar(100), pagerduty varchar(100), register_date TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP)'
cursor.execute(first_row)
cursor.close()