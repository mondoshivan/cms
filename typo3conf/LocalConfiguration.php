<?php
return [
    'BE' => [
        'debug' => false,
        'explicitADmode' => 'explicitAllow',
        'installToolPassword' => '$argon2i$v=19$m=65536,t=16,p=2$ek53bVRvTnJxOXNiSkl3OA$eaV71H5kiEnNlxU2ETOsHPrXr4OtEBKIC3gZFJwOxqw',
        'loginSecurityLevel' => 'normal',
        'passwordHashing' => [
            'className' => 'TYPO3\\CMS\\Core\\Crypto\\PasswordHashing\\Argon2iPasswordHash',
            'options' => [],
        ],
    ],
    'DB' => [
        'Connections' => [
            'Default' => [
                'charset' => 'utf8mb4',
                'dbname' => 'server_W19046',
                'driver' => 'mysqli',
                'host' => '192.168.176.222',
                'password' => 'crMVkaABGvYDLsdi',
                'port' => 3306,
                'tableoptions' => [
                    'charset' => 'utf8mb4',
                    'collate' => 'utf8mb4_unicode_ci',
                ],
                'user' => 'server_W19046',
            ],
        ],
    ],
    'EXT' => [
        'extConf' => [
            'backend' => 'a:6:{s:14:"backendFavicon";s:0:"";s:11:"backendLogo";s:0:"";s:20:"loginBackgroundImage";s:0:"";s:13:"loginFootnote";s:0:"";s:19:"loginHighlightColor";s:0:"";s:9:"loginLogo";s:0:"";}',
            'extension_builder' => 'a:3:{s:9:"backupDir";s:35:"uploads/tx_extensionbuilder/backups";s:15:"backupExtension";s:1:"1";s:15:"enableRoundtrip";s:1:"1";}',
            'extensionmanager' => 'a:2:{s:21:"automaticInstallation";s:1:"1";s:11:"offlineMode";s:1:"0";}',
            'mask' => 'a:9:{s:4:"json";s:60:"typo3conf/ext/sushi_factory/Resources/Private/Mask/mask.json";s:18:"backendlayout_pids";s:3:"0,1";s:7:"content";s:70:"typo3conf/ext/sushi_factory/Resources/Private/Mask/Frontend/Templates/";s:7:"layouts";s:68:"typo3conf/ext/sushi_factory/Resources/Private/Mask/Frontend/Layouts/";s:8:"partials";s:69:"typo3conf/ext/sushi_factory/Resources/Private/Mask/Frontend/Partials/";s:7:"backend";s:69:"typo3conf/ext/sushi_factory/Resources/Private/Mask/Backend/Templates/";s:15:"layouts_backend";s:67:"typo3conf/ext/sushi_factory/Resources/Private/Mask/Backend/Layouts/";s:16:"partials_backend";s:68:"typo3conf/ext/sushi_factory/Resources/Private/Mask/Backend/Partials/";s:7:"preview";s:51:"typo3conf/ext/sushi_factory/Resources/Private/Mask/";}',
        ],
    ],
    'EXTENSIONS' => [
        'backend' => [
            'backendFavicon' => '',
            'backendLogo' => '',
            'loginBackgroundImage' => '',
            'loginFootnote' => '',
            'loginHighlightColor' => '',
            'loginLogo' => '',
        ],
        'extension_builder' => [
            'backupDir' => 'uploads/tx_extensionbuilder/backups',
            'backupExtension' => '1',
            'enableRoundtrip' => '1',
        ],
        'extensionmanager' => [
            'automaticInstallation' => '1',
            'offlineMode' => '0',
        ],
        'mask' => [
            'backend' => 'typo3conf/ext/sushi_factory/Resources/Private/Mask/Backend/Templates/',
            'backendlayout_pids' => '0,1',
            'content' => 'typo3conf/ext/sushi_factory/Resources/Private/Mask/Frontend/Templates/',
            'json' => 'typo3conf/ext/sushi_factory/Resources/Private/Mask/mask.json',
            'layouts' => 'typo3conf/ext/sushi_factory/Resources/Private/Mask/Frontend/Layouts/',
            'layouts_backend' => 'typo3conf/ext/sushi_factory/Resources/Private/Mask/Backend/Layouts/',
            'partials' => 'typo3conf/ext/sushi_factory/Resources/Private/Mask/Frontend/Partials/',
            'partials_backend' => 'typo3conf/ext/sushi_factory/Resources/Private/Mask/Backend/Partials/',
            'preview' => 'typo3conf/ext/sushi_factory/Resources/Private/Mask/',
        ],
    ],
    'FE' => [
        'debug' => false,
        'lifetime' => 86400,
        'loginSecurityLevel' => 'normal',
        'passwordHashing' => [
            'className' => 'TYPO3\\CMS\\Core\\Crypto\\PasswordHashing\\Argon2iPasswordHash',
            'options' => [],
        ],
    ],
    'MAIL' => [
        'transport' => 'sendmail',
        'transport_sendmail_command' => '/usr/sbin/sendmail -t -i ',
        'transport_smtp_encrypt' => '',
        'transport_smtp_password' => '',
        'transport_smtp_server' => '',
        'transport_smtp_username' => '',
    ],
    'SYS' => [
        'devIPmask' => '',
        'displayErrors' => 0,
        'encryptionKey' => '4d9772ed55ae09ca701945d90cc5539f0d94e089c465b4428a3254dec65096e775fb12afa196066f5a6c0329a66bc17a',
        'exceptionalErrors' => 4096,
        'features' => [
            'unifiedPageTranslationHandling' => true,
        ],
        'sitename' => 'Sushi Factory',
        'systemLocale' => 'de_DE.UTF-8',
        'systemLogLevel' => 2,
        'systemMaintainers' => [
            1,
        ],
    ],
];
