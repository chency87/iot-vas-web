const deviceList = [{
  'manufacturer': 'Axis Communications AB',
  'model_name': 'P3346',
  'firmware_version': '5.20',
  'is_discontinued': true,
  'cve_list': [
    {
      'cve_id': 'CVE-2018-10660',
      'cvss': 10
    },
    {
      'cve_id': 'CVE-2018-10662',
      'cvss': 10
    },
    {
      'cve_id': 'CVE-2018-10661',
      'cvss': 10
    },
    {
      'cve_id': 'CVE-2018-10658',
      'cvss': 5
    },
    {
      'cve_id': 'CVE-2018-10659',
      'cvss': 5
    },
    {
      'cve_id': 'CVE-2018-10663',
      'cvss': 5
    },
    {
      'cve_id': 'CVE-2018-10664',
      'cvss': 5
    }
  ],
  'device_type': 'IP Camera',
  'firmware_info': {
    'name': 'AXIS P3346 5.20',
    'version': '5.20',
    'sha2': 'af88b1aaac0b222df8539f3ae1479b5c8eaeae41f1776b5dd2fa805cb33a1175',
    'release_date': '2010-12-03',
    'download_url': 'http://cdn.axis.com/ftp/pub_soft/MPQT/P3346/5_20/P3346_5_20.bin'
  },
  'latest_firmware_info': {
    'name': 'AXIS P3346 5.51.7.3',
    'version': '5.51.7.3',
    'sha2': 'a72361af68bd94f07cdf8b6c43389f4f382576bab752d4fb25dc74e93d4767a7',
    'release_date': '2020-12-03',
    'download_url': 'https://cdn.axis.com/ftp/pub_soft/MPQT/P3346/5_51_7_3/P3346_5_51_7_3.bin'
  }
}, {
  manufacturer: 'Omron',
  model_name: 'PLC 3000',
  firmware_version: '15.8',
  device_type: 'PLC',
  is_discontinued: 'True',
  cve_list: [{
    cve_id: 1,
    cvss: 25
  },
  {
    cveId: 2,
    cvss: 35
  }],
  firmware_info: [{
    name: 'S7 - 1001',
    version: '30.2',
    sha2: 'shabbuhuiasd2131b2u23',
    release_date: '2022.02.01',
    download_url: 'www.google.com'
  }],
  latest_firmware_info: {
    name: 'S7 - 1001',
    version: '30.2',
    sha2: 'shabbuhuiasd2131b2u23',
    release_date: '2022.02.01',
    download_url: 'www.google.com'
  }
}]

const risk = [{
  'risk_summary': {
    'net_services_risk': 'Critical',
    'crypto_risk': 'Critical',
    'kernel_risk': 'None',
    'client_tools_risk': 'High'
  },
  'vulnerable_components': [
    {
      'name': 'libupnp',
      'version': '1.4.1',
      'category': 'UPnP Server',
      'vulnerabilities': [
        {
          'cve_id': 'CVE-2012-5958',
          'cvss': 10
        },
        {
          'cve_id': 'CVE-2016-8863',
          'cvss': 7.5
        },
        {
          'cve_id': 'CVE-2020-13848',
          'cvss': 5
        },
        {
          'cve_id': 'CVE-2016-6255',
          'cvss': 5
        }
      ],
      'cvss_max': 10
    },
    {
      'name': 'openssl',
      'version': '0.9.7m',
      'category': 'Crypto Library',
      'vulnerabilities': [
        {
          'cve_id': 'CVE-2009-3245',
          'cvss': 10
        },
        {
          'cve_id': 'CVE-2016-2108',
          'cvss': 10
        },
        {
          'cve_id': 'CVE-2016-2109',
          'cvss': 7.8
        },
        {
          'cve_id': 'CVE-2010-0742',
          'cvss': 7.5
        },
        {
          'cve_id': 'CVE-2010-4252',
          'cvss': 7.5
        },
        {
          'cve_id': 'CVE-2012-2110',
          'cvss': 7.5
        },
        {
          'cve_id': 'CVE-2014-8176',
          'cvss': 7.5
        },
        {
          'cve_id': 'CVE-2015-0292',
          'cvss': 7.5
        },
        {
          'cve_id': 'CVE-2014-3567',
          'cvss': 7.1
        },
        {
          'cve_id': 'CVE-2012-2333',
          'cvss': 6.8
        },
        {
          'cve_id': 'CVE-2014-0195',
          'cvss': 6.8
        },
        {
          'cve_id': 'CVE-2015-0209',
          'cvss': 6.8
        },
        {
          'cve_id': 'CVE-2015-1791',
          'cvss': 6.8
        },
        {
          'cve_id': 'CVE-2016-2176',
          'cvss': 6.4
        },
        {
          'cve_id': 'CVE-2009-3555',
          'cvss': 5.8
        },
        {
          'cve_id': 'CVE-2014-0224',
          'cvss': 5.8
        },
        {
          'cve_id': 'CVE-2011-4354',
          'cvss': 5.8
        },
        {
          'cve_id': 'CVE-2008-5077',
          'cvss': 5.8
        },
        {
          'cve_id': 'CVE-2009-1387',
          'cvss': 5
        },
        {
          'cve_id': 'CVE-2006-7250',
          'cvss': 5
        },
        {
          'cve_id': 'CVE-2009-0789',
          'cvss': 5
        },
        {
          'cve_id': 'CVE-2009-1377',
          'cvss': 5
        },
        {
          'cve_id': 'CVE-2009-1378',
          'cvss': 5
        },
        {
          'cve_id': 'CVE-2009-4355',
          'cvss': 5
        },
        {
          'cve_id': 'CVE-2011-1473',
          'cvss': 5
        },
        {
          'cve_id': 'CVE-2011-4576',
          'cvss': 5
        },
        {
          'cve_id': 'CVE-2011-4619',
          'cvss': 5
        },
        {
          'cve_id': 'CVE-2012-0027',
          'cvss': 5
        },
        {
          'cve_id': 'CVE-2012-0884',
          'cvss': 5
        },
        {
          'cve_id': 'CVE-2012-1165',
          'cvss': 5
        },
        {
          'cve_id': 'CVE-2014-3570',
          'cvss': 5
        },
        {
          'cve_id': 'CVE-2014-3571',
          'cvss': 5
        },
        {
          'cve_id': 'CVE-2014-3572',
          'cvss': 5
        },
        {
          'cve_id': 'CVE-2014-8275',
          'cvss': 5
        },
        {
          'cve_id': 'CVE-2015-0286',
          'cvss': 5
        },
        {
          'cve_id': 'CVE-2015-0287',
          'cvss': 5
        },
        {
          'cve_id': 'CVE-2015-0288',
          'cvss': 5
        },
        {
          'cve_id': 'CVE-2015-0289',
          'cvss': 5
        },
        {
          'cve_id': 'CVE-2015-0293',
          'cvss': 5
        },
        {
          'cve_id': 'CVE-2015-1790',
          'cvss': 5
        },
        {
          'cve_id': 'CVE-2015-1792',
          'cvss': 5
        },
        {
          'cve_id': 'CVE-2016-2106',
          'cvss': 5
        },
        {
          'cve_id': 'CVE-2009-1386',
          'cvss': 5
        },
        {
          'cve_id': 'CVE-2013-0166',
          'cvss': 5
        },
        {
          'cve_id': 'CVE-2017-3735',
          'cvss': 5
        },
        {
          'cve_id': 'CVE-2015-4000',
          'cvss': 4.3
        },
        {
          'cve_id': 'CVE-2008-7270',
          'cvss': 4.3
        },
        {
          'cve_id': 'CVE-2010-0433',
          'cvss': 4.3
        },
        {
          'cve_id': 'CVE-2010-4180',
          'cvss': 4.3
        },
        {
          'cve_id': 'CVE-2011-4108',
          'cvss': 4.3
        },
        {
          'cve_id': 'CVE-2011-4577',
          'cvss': 4.3
        },
        {
          'cve_id': 'CVE-2013-6449',
          'cvss': 4.3
        },
        {
          'cve_id': 'CVE-2014-0221',
          'cvss': 4.3
        },
        {
          'cve_id': 'CVE-2014-3470',
          'cvss': 4.3
        },
        {
          'cve_id': 'CVE-2014-3568',
          'cvss': 4.3
        },
        {
          'cve_id': 'CVE-2015-0204',
          'cvss': 4.3
        },
        {
          'cve_id': 'CVE-2015-1788',
          'cvss': 4.3
        },
        {
          'cve_id': 'CVE-2015-1789',
          'cvss': 4.3
        },
        {
          'cve_id': 'CVE-2016-0703',
          'cvss': 4.3
        },
        {
          'cve_id': 'CVE-2016-0704',
          'cvss': 4.3
        },
        {
          'cve_id': 'CVE-2010-5298',
          'cvss': 4
        },
        {
          'cve_id': 'CVE-2016-2107',
          'cvss': 2.6
        },
        {
          'cve_id': 'CVE-2011-1945',
          'cvss': 2.6
        },
        {
          'cve_id': 'CVE-2016-7056',
          'cvss': 2.1
        },
        {
          'cve_id': 'CVE-2014-0076',
          'cvss': 1.9
        },
        {
          'cve_id': 'CVE-2007-3108',
          'cvss': 1.2
        }
      ],
      'cvss_max': 10
    },
    {
      'name': 'busybox',
      'version': '1.1.3',
      'category': 'Client Tool',
      'vulnerabilities': [
        {
          'cve_id': 'CVE-2016-6301',
          'cvss': 7.8
        },
        {
          'cve_id': 'CVE-2016-2148',
          'cvss': 7.5
        },
        {
          'cve_id': 'CVE-2018-1000517',
          'cvss': 7.5
        },
        {
          'cve_id': 'CVE-2013-1813',
          'cvss': 7.2
        },
        {
          'cve_id': 'CVE-2011-2716',
          'cvss': 6.8
        },
        {
          'cve_id': 'CVE-2018-1000500',
          'cvss': 6.8
        },
        {
          'cve_id': 'CVE-2017-16544',
          'cvss': 6.5
        },
        {
          'cve_id': 'CVE-2011-5325',
          'cvss': 5
        },
        {
          'cve_id': 'CVE-2016-2147',
          'cvss': 5
        },
        {
          'cve_id': 'CVE-2018-20679',
          'cvss': 5
        },
        {
          'cve_id': 'CVE-2019-5747',
          'cvss': 5
        },
        {
          'cve_id': 'CVE-2015-9261',
          'cvss': 4.3
        },
        {
          'cve_id': 'CVE-2014-9645',
          'cvss': 2.1
        }
      ],
      'cvss_max': 7.8
    },
    {
      'name': 'dbus',
      'version': '1.2.4',
      'category': 'Generic Server',
      'vulnerabilities': [
        {
          'cve_id': 'CVE-2011-2533',
          'cvss': 3.3
        }
      ],
      'cvss_max': 3.3
    }
  ]
},
{
  'risk_summary': {
    'net_services_risk': 'Critical',
    'crypto_risk': 'Low',
    'kernel_risk': 'Medium',
    'client_tools_risk': 'Low'
  },
  'vulnerable_components': [
    {
      'name': 'openssl',
      'version': '0.9.7m',
      'category': 'Crypto Library',
      'vulnerabilities': [
        {
          'cve_id': 'CVE-2009-3245',
          'cvss': 10
        },
        {
          'cve_id': 'CVE-2016-2108',
          'cvss': 10
        },
        {
          'cve_id': 'CVE-2016-2109',
          'cvss': 7.8
        },
        {
          'cve_id': 'CVE-2010-0742',
          'cvss': 7.5
        },
        {
          'cve_id': 'CVE-2010-4252',
          'cvss': 7.5
        },
        {
          'cve_id': 'CVE-2012-2110',
          'cvss': 7.5
        },
        {
          'cve_id': 'CVE-2007-3108',
          'cvss': 1.2
        }
      ],
      'cvss_max': 10
    },
    {
      'name': 'busybox',
      'version': '1.1.3',
      'category': 'Client Tool',
      'vulnerabilities': [
        {
          'cve_id': 'CVE-2016-6301',
          'cvss': 7.8
        },
        {
          'cve_id': 'CVE-2014-9645',
          'cvss': 2.1
        }
      ],
      'cvss_max': 7.8
    },
    {
      'name': 'dbus',
      'version': '1.2.4',
      'category': 'Generic Server',
      'vulnerabilities': [
        {
          'cve_id': 'CVE-2011-2533',
          'cvss': 3.3
        }
      ],
      'cvss_max': 3.3
    }
  ]
}]

const accounts = [
  {
    'name': 'sessioncgi',
    'pwd_hash': '*',
    'hash_algorithm': null,
    'shell': '/bin/false',
    'uid': 127,
    'gid': 127,
    'home_dir': '/'
  },
  {
    'name': 'environment',
    'pwd_hash': '*',
    'hash_algorithm': null,
    'shell': '/bin/false',
    'uid': 132,
    'gid': 132,
    'home_dir': '/'
  },
  {
    'name': 'mediaclipcgi',
    'pwd_hash': '*',
    'hash_algorithm': null,
    'shell': '/bin/false',
    'uid': 134,
    'gid': 254,
    'home_dir': '/'
  },
  {
    'name': 'wsdd',
    'pwd_hash': '*',
    'hash_algorithm': null,
    'shell': '/bin/false',
    'uid': 136,
    'gid': 136,
    'home_dir': '/'
  },
  {
    'name': 'triggerd',
    'pwd_hash': '*',
    'hash_algorithm': null,
    'shell': '/bin/false',
    'uid': 120,
    'gid': 120,
    'home_dir': '/'
  },
  {
    'name': 'tampering',
    'pwd_hash': '*',
    'hash_algorithm': null,
    'shell': '/bin/false',
    'uid': 122,
    'gid': 122,
    'home_dir': '/'
  },
  {
    'name': 'storage',
    'pwd_hash': '*',
    'hash_algorithm': null,
    'shell': '/bin/false',
    'uid': 123,
    'gid': 123,
    'home_dir': '/'
  },
  {
    'name': 'focus',
    'pwd_hash': '*',
    'hash_algorithm': null,
    'shell': '/bin/false',
    'uid': 124,
    'gid': 124,
    'home_dir': '/'
  },
  {
    'name': 'wsd',
    'pwd_hash': '*',
    'hash_algorithm': null,
    'shell': '/bin/false',
    'uid': 137,
    'gid': 137,
    'home_dir': '/'
  },
  {
    'name': 'capbufd',
    'pwd_hash': '*',
    'hash_algorithm': null,
    'shell': '/bin/false',
    'uid': 138,
    'gid': 138,
    'home_dir': '/'
  },
  {
    'name': 'bin',
    'pwd_hash': '*',
    'hash_algorithm': null,
    'shell': '/bin/sh',
    'uid': 1,
    'gid': 1,
    'home_dir': '/bin'
  },
  {
    'name': 'root',
    'pwd_hash': 'AiADGkJIfIlXk',
    'hash_algorithm': '0',
    'shell': '/bin/sh',
    'uid': 0,
    'gid': 0,
    'home_dir': '/root'
  },
  {
    'name': 'anonymous',
    'pwd_hash': '*',
    'hash_algorithm': null,
    'shell': '/bin/false',
    'uid': 57,
    'gid': 57,
    'home_dir': '/var/empty/'
  },
  {
    'name': 'daemon',
    'pwd_hash': '*',
    'hash_algorithm': null,
    'shell': '/bin/sh',
    'uid': 2,
    'gid': 2,
    'home_dir': '/usr/sbin'
  },
  {
    'name': 'bw',
    'pwd_hash': '*',
    'hash_algorithm': null,
    'shell': '/bin/false',
    'uid': 102,
    'gid': 102,
    'home_dir': '/'
  },
  {
    'name': 'messagebus',
    'pwd_hash': '*',
    'hash_algorithm': null,
    'shell': '/bin/false',
    'uid': 101,
    'gid': 101,
    'home_dir': '/'
  },
  {
    'name': 'event',
    'pwd_hash': '*',
    'hash_algorithm': null,
    'shell': '/bin/false',
    'uid': 104,
    'gid': 104,
    'home_dir': '/'
  },
  {
    'name': 'motion',
    'pwd_hash': '*',
    'hash_algorithm': null,
    'shell': '/bin/false',
    'uid': 103,
    'gid': 103,
    'home_dir': '/'
  },
  {
    'name': 'axisns',
    'pwd_hash': '*',
    'hash_algorithm': null,
    'shell': '/bin/false',
    'uid': 106,
    'gid': 106,
    'home_dir': '/'
  },
  {
    'name': 'streamer',
    'pwd_hash': '*',
    'hash_algorithm': null,
    'shell': '/bin/false',
    'uid': 105,
    'gid': 105,
    'home_dir': '/'
  },
  {
    'name': 'iod',
    'pwd_hash': '*',
    'hash_algorithm': null,
    'shell': '/bin/false',
    'uid': 109,
    'gid': 109,
    'home_dir': '/'
  },
  {
    'name': 'mld',
    'pwd_hash': '*',
    'hash_algorithm': null,
    'shell': '/bin/false',
    'uid': 108,
    'gid': 108,
    'home_dir': '/'
  },
  {
    'name': 'ptzadm',
    'pwd_hash': '*',
    'hash_algorithm': null,
    'shell': '/bin/false',
    'uid': 113,
    'gid': 113,
    'home_dir': '/'
  },
  {
    'name': 'lang_handler',
    'pwd_hash': '*',
    'hash_algorithm': null,
    'shell': '/bin/false',
    'uid': 110,
    'gid': 110,
    'home_dir': '/'
  },
  {
    'name': 'upnp',
    'pwd_hash': '*',
    'hash_algorithm': null,
    'shell': '/bin/false',
    'uid': 115,
    'gid': 115,
    'home_dir': '/'
  },
  {
    'name': 'gtourd',
    'pwd_hash': '*',
    'hash_algorithm': null,
    'shell': '/bin/false',
    'uid': 114,
    'gid': 114,
    'home_dir': '/'
  },
  {
    'name': 'stunnel',
    'pwd_hash': '*',
    'hash_algorithm': null,
    'shell': '/bin/false',
    'uid': 117,
    'gid': 117,
    'home_dir': '/'
  },
  {
    'name': 'rendezvous',
    'pwd_hash': '*',
    'hash_algorithm': null,
    'shell': '/bin/false',
    'uid': 116,
    'gid': 116,
    'home_dir': '/'
  },
  {
    'name': 'acd',
    'pwd_hash': '*',
    'hash_algorithm': null,
    'shell': '/bin/false',
    'uid': 119,
    'gid': 119,
    'home_dir': '/'
  },
  {
    'name': 'imaged',
    'pwd_hash': '*',
    'hash_algorithm': null,
    'shell': '/bin/false',
    'uid': 118,
    'gid': 118,
    'home_dir': '/'
  },
  {
    'name': 'nobody',
    'pwd_hash': '*',
    'hash_algorithm': null,
    'shell': '/bin/false',
    'uid': 254,
    'gid': 254,
    'home_dir': '/var/empty'
  },
  {
    'name': 'certcgi',
    'pwd_hash': '*',
    'hash_algorithm': null,
    'shell': '/bin/false',
    'uid': 142,
    'gid': 142,
    'home_dir': '/'
  }
]
const privateKeys = [
  {
    'file_name': 'server.pem',
    'file_hash': 'e8944eba6be07e26aeefe15893c47b9ab93828d2000e60033cd5db61e93a8910',
    'pem_type': 'RSAPrivateKey',
    'algorithm': 'RSA',
    'bits': 1024
  }
]
const weakKeys = [
  {
    'file_name': 'key.pem',
    'file_hash': '5c26251e4db4acd0b21d0bbb703ce4fe921e28eadc9f252348c1de4d6d114cf2',
    'pem_type': 'RSAPrivateKey',
    'algorithm': 'RSA',
    'bits': 512
  }
]
const expiredKeys = [
  {
    'file_name': 'nwsoc_RootCert.pem',
    'file_hash': '4b5b840d5becdda4eb8a44a488db551bd68557c5b2e9811d473506aa28302d2b',
    'thumb_print': '02faf3e291435468607857694df5e45b68851868',
    'public_key': {
      'algorithm': 'RSA',
      'bits': 2048
    },
    'subject_name': 'C=SE,O=AddTrust AB,OU=AddTrust External TTP Network,CN=AddTrust External CA Root',
    'valid_from': '2000-05-30T10:48:38Z',
    'valid_to': '2020-05-30T10:48:38Z'
  },
  {
    'file_name': 'nwsoc_RootCert.pem',
    'file_hash': '4b5b840d5becdda4eb8a44a488db551bd68557c5b2e9811d473506aa28302d2b',
    'thumb_print': 'ccab0ea04c2301d6697bdd379fcd12eb24e3949d',
    'public_key': {
      'algorithm': 'RSA',
      'bits': 2048
    },
    'subject_name': 'C=SE,O=AddTrust AB,OU=AddTrust TTP Network,CN=AddTrust Class 1 CA Root',
    'valid_from': '2000-05-30T10:38:31Z',
    'valid_to': '2020-05-30T10:38:31Z'
  },
  {
    'file_name': 'nwsoc_RootCert.pem',
    'file_hash': '4b5b840d5becdda4eb8a44a488db551bd68557c5b2e9811d473506aa28302d2b',
    'thumb_print': '4d2378ec919539b5007f758f033b211ec54d8bcf',
    'public_key': {
      'algorithm': 'RSA',
      'bits': 2048
    },
    'subject_name': 'C=SE,O=AddTrust AB,OU=AddTrust TTP Network,CN=AddTrust Qualified CA Root',
    'valid_from': '2000-05-30T10:44:50Z',
    'valid_to': '2020-05-30T10:44:50Z'
  },
  {
    'file_name': 'nwsoc_RootCert.pem',
    'file_hash': '4b5b840d5becdda4eb8a44a488db551bd68557c5b2e9811d473506aa28302d2b',
    'thumb_print': '2ab628485e78fbf3ad9e7910dd6bdf99722c96e5',
    'public_key': {
      'algorithm': 'RSA',
      'bits': 2048
    },
    'subject_name': 'C=SE,O=AddTrust AB,OU=AddTrust TTP Network,CN=AddTrust Public CA Root',
    'valid_from': '2000-05-30T10:41:50Z',
    'valid_to': '2020-05-30T10:41:50Z'
  },
  {
    'file_name': 'nwsoc_RootCert.pem',
    'file_hash': '4b5b840d5becdda4eb8a44a488db551bd68557c5b2e9811d473506aa28302d2b',
    'thumb_print': 'a9e9780814375888f20519b06d2b0d2b6016907d',
    'public_key': {
      'algorithm': 'RSA',
      'bits': 2048
    },
    'subject_name': 'C=US,O=GeoTrust Inc.,CN=GeoTrust Global CA 2',
    'valid_from': '2004-03-04T05:00:00Z',
    'valid_to': '2019-03-04T05:00:00Z'
  },
  {
    'file_name': 'nwsoc_RootCert.pem',
    'file_hash': '4b5b840d5becdda4eb8a44a488db551bd68557c5b2e9811d473506aa28302d2b',
    'thumb_print': '58119f0e128287ea50fdd987456f4f78dcfad6d4',
    'public_key': {
      'algorithm': 'RSA',
      'bits': 2048
    },
    'subject_name': 'C=US,ST=UT,L=Salt Lake City,O=The USERTRUST Network,OU=http://www.usertrust.com,CN=UTN - DATACorp SGC',
    'valid_from': '1999-06-24T18:57:21Z',
    'valid_to': '2019-06-24T19:06:30Z'
  },
  {
    'file_name': 'nwsoc_RootCert.pem',
    'file_hash': '4b5b840d5becdda4eb8a44a488db551bd68557c5b2e9811d473506aa28302d2b',
    'thumb_print': 'd23209ad23d314232174e40d7f9d62139786633a',
    'public_key': {
      'algorithm': 'RSA',
      'bits': 1024
    },
    'subject_name': 'C=US,O=Equifax,OU=Equifax Secure Certificate Authority',
    'valid_from': '1998-08-22T16:41:51Z',
    'valid_to': '2018-08-22T16:41:51Z'
  },
  {
    'file_name': 'nwsoc_RootCert.pem',
    'file_hash': '4b5b840d5becdda4eb8a44a488db551bd68557c5b2e9811d473506aa28302d2b',
    'thumb_print': '0483ed3399ac3608058722edbc5e4600e3bef9d7',
    'public_key': {
      'algorithm': 'RSA',
      'bits': 2048
    },
    'subject_name': 'C=US,ST=UT,L=Salt Lake City,O=The USERTRUST Network,OU=http://www.usertrust.com,CN=UTN-USERFirst-Hardware',
    'valid_from': '1999-07-09T18:10:42Z',
    'valid_to': '2019-07-09T18:19:22Z'
  },
  {
    'file_name': 'nwsoc_RootCert.pem',
    'file_hash': '4b5b840d5becdda4eb8a44a488db551bd68557c5b2e9811d473506aa28302d2b',
    'thumb_print': 'b18d9d195669ba0f7829517566c25f422a277104',
    'public_key': {
      'algorithm': 'RSA',
      'bits': 2048
    },
    'subject_name': 'C=US,O=VeriSign, Inc.,OU=VeriSign Trust Network,OU=Terms of use at https://www.verisign.com/rpa (c)10,CN=VeriSign Class 3 International Server CA - G3',
    'valid_from': '2010-02-08T00:00:00Z',
    'valid_to': '2020-02-07T23:59:59Z'
  }
]

const weakCerts = [
  {
    'file_name': 'Class_1_Public_Primary_Certification_Authority.pem',
    'file_hash': '597a3eb5eddc233d46a59d6e297d25da857f327b99df02dac422a4e8633995d4',
    'thumb_print': '90aea26985ff14804c434952ece9608477af556f',
    'sign_algorithm': 'md2WithRSAEncryption',
    'subject_name': 'C=US,O=VeriSign, Inc.,OU=Class 1 Public Primary Certification Authority',
    'valid_from': '1996-01-29T00:00:00Z',
    'valid_to': '2028-08-01T23:59:59Z'
  },
  {
    'file_name': 'Class_2_Public_Primary_Certification_Authority.pem',
    'file_hash': '73f3a2970acb428b17b126a78a4a02f89830ad345e6c7b3ea247d453faf79230',
    'thumb_print': '6782aae0edeee21a5839d3c0cd14680a4f60142a',
    'sign_algorithm': 'md2WithRSAEncryption',
    'subject_name': 'C=US,O=VeriSign, Inc.,OU=Class 2 Public Primary Certification Authority',
    'valid_from': '1996-01-29T00:00:00Z',
    'valid_to': '2028-08-01T23:59:59Z'
  }
]
const configIssues = [
  {
    'service_name': 'Telnet',
    'config_file': '/etc/init.d/rcS',
    'issues': [
      'Result: telnet enabled in path'
    ],
    'suggestions': [
      'Disable telnet in path and use SSH instead'
    ]
  },
  {
    'service_name': 'Telnet',
    'config_file': '/etc/init.d/rcS.v2.0',
    'issues': [
      'Result: telnet enabled in path'
    ],
    'suggestions': [
      'Disable telnet in path and use SSH instead'
    ]
  },
  {
    'service_name': 'SNMP',
    'config_file': '/usr/local/etc/ippf/base/snmpd.conf',
    'issues': [
      'Result: found easy guessable snmp community string'
    ],
    'suggestions': [
      'Change public/private community strings to another value'
    ]
  }
]
module.exports = [
  {
    url: '/devices',
    type: 'get',
    response: config => {
      const { start, length, search } = config.query
      // mock error
      console.log(start, search)
      JSON.parse(search)['hostname']
      const total = deviceList.length / length

      return {
        code: 20000,
        data: {
          total: total,
          data: deviceList
        }
      }
    }
  },
  // delete role
  {
    url: '/task/delete',
    type: 'post',
    response: {
      code: 20000,
      data: {
        status: 'success'
      }
    }
  },

  {
    url: '/firmware/risk',
    type: 'get',
    response: config => {
      const { firmware_hash } = config.query
      let data = ''
      if (firmware_hash.endsWith('7')) {
        data = risk[1]
      } else {
        data = risk[0]
      }
      console.log(firmware_hash)

      return {
        code: 20000,
        data: {
          data: data
        }
      }
    }
  },

  {
    url: '/firmware/accounts',
    type: 'get',
    response: config => {
      const { firmware_hash } = config.query
      let data = ''
      if (firmware_hash.endsWith('1')) {
        data = accounts
      } else {
        data = accounts
      }

      return {
        code: 20000,
        data: {
          data: data
        }
      }
    }
  },
  {
    url: '/firmware/private-keys',
    type: 'get',
    response: config => {
      const { firmware_hash } = config.query
      let data = ''
      if (firmware_hash.endsWith('1')) {
        data = privateKeys
      } else {
        data = privateKeys
      }

      return {
        code: 20000,
        data: {
          data: data
        }
      }
    }
  },
  {
    url: '/firmware/weak-keys',
    type: 'get',
    response: config => {
      // const { firmware_hash } = config.query
      return {
        code: 20000,
        data: {
          data: weakKeys
        }
      }
    }
  },
  {
    url: '/firmware/expired-certs',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          data: expiredKeys
        }
      }
    }
  },
  {
    url: '/firmware/weak-certs',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          data: weakCerts
        }
      }
    }
  },
  {
    url: '/firmware/config-issues',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          data: configIssues
        }
      }
    }
  }

]

