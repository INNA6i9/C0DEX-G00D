import { Tool, Category } from './types';

// Helper function to create tool entries from a GitHub URL
const createTermuxTool = (
    name: string,
    description: string,
    category: Category,
    repoUrl: string,
    installCommands: string[] = [],
    usageCommands: string[] = [],
    platform: 'Termux' | 'Kali' = 'Termux',
    version?: string
): Tool => {
    const repoName = repoUrl.split('/').pop() || name;
    const defaultInstall = [`git clone ${repoUrl}`, `cd ${repoName}`];
    const installation = [...defaultInstall, ...installCommands];
    return {
        name,
        description,
        category,
        installation,
        usage: usageCommands,
        platform,
        githubUrl: repoUrl,
        version
    };
};

export const allHackingTools: Tool[] = [
    // Anonymity Tools
    createTermuxTool('Multitor', 'A tool to create multiple TOR instances with a load-balancing HAProxy.', Category.ANONYMITY, 'https://github.com/trimstray/multitor', ['bash setup.sh'], ['sudo multitor --start']),
    
    // Information Gathering
    {
        name: 'AstraNmap',
        description: 'A powerful open-source security scanner for network exploration and security auditing.',
        category: Category.RECON,
        platform: 'Termux',
        githubUrl: 'https://github.com/Gameye98/AstraNmap',
        version: '2.1',
        installation: [
            '# Step 1: Clone the repository from GitHub',
            'git clone https://github.com/Gameye98/AstraNmap',
            '# Step 2: Navigate into the tool\'s directory',
            'cd AstraNmap',
            '# Step 3: Execute the installer script to set up dependencies',
            'bash astranmap-install.sh'
        ],
        usage: [
            '# Launch the tool with root privileges after installation is complete',
            'sudo astranmap'
        ]
    },
    createTermuxTool('EvilURL', 'Generates unicode evil domains for IDN Homograph Attack to receive saved credentials.', Category.WEB, 'https://github.com/UndeadSec/EvilURL', ['pip install -r requirements.txt'], ['python3 evilurl.py'], 'Termux', '3.2'),
    createTermuxTool('OSIF', 'Open Source Information Facebook, an accurate Facebook account information gathering tool.', Category.OSINT, 'https://github.com/ciku370/OSIF', ['pip2 install -r requirements.txt'], ['python2 osif.py']),
    createTermuxTool('Easymap', 'A script that performs an nmap scan with the results in a user-friendly format.', Category.RECON, 'https://github.com/CravateRouge/Easymap', ['bash easymap.sh'], ['sudo ./easymap.sh']),
    createTermuxTool('MaxSubdoFinder', 'A tool for finding subdomains of a given domain.', Category.RECON, 'https://github.com/maxteroit/MaxSubdoFinder', ['pip install -r requirements.txt'], ['python maxsubdofinder.py -d <domain>']),
    createTermuxTool('Trape', 'People tracker on the Internet. Find and track people online.', Category.OSINT, 'https://github.com/jofpin/trape', ['pip install -r requirements.txt'], ['python trape.py --url <url> --port <port>']),
    createTermuxTool('Red Hawk', 'All in one tool for information gathering and vulnerability scanning.', Category.RECON, 'https://github.com/Tuhinshubhra/RED_HAWK', [], ['php rhawk.php']),
    createTermuxTool('LittleBrother', 'Information gathering tool for a specific person (OSINT).', Category.OSINT, 'https://github.com/Lulz3xploit/LittleBrother', ['pip install -r requirements.txt', 'python -m nltk.downloader all'], ['python littlebrother.py']),
    createTermuxTool('Seeker', 'Accurately find location of a mobile device with a phishing link.', Category.OSINT, 'https://github.com/thewhiteh4t/seeker', ['bash install.sh'], ['python seeker.py'], 'Termux', '1.3.4'),
    createTermuxTool('ReconDog', 'An all-in-one tool for information gathering needs.', Category.RECON, 'https://github.com/s0md3v/ReconDog', [], ['python dog.py']),
    createTermuxTool('D-Tech', 'A tool for collecting information from a target.', Category.OSINT, 'https://github.com/bibort/D-Tech', [], ['python d-tech.py']),
    createTermuxTool('IpHack', 'A tool for tracking an IP address.', Category.OSINT, 'https://github.com/mishakorzik/IpHack', ['bash setup'], ['python iphack.py -t <ip_address>']),
    createTermuxTool('Infoga', 'Email OSINT tool to gather information from different public sources.', Category.OSINT, 'https://github.com/m4ll0k/Infoga', ['python setup.py install'], ['python infoga.py --domain example.com']),

    // Exploitation Tools
    createTermuxTool('RouterSploit', 'Exploitation framework dedicated to embedded devices.', Category.EXPLOITATION, 'https://github.com/threat9/routersploit', ['python3 -m pip install -r requirements.txt'], ['python3 rsf.py'], 'Termux', '3.0.1'),
    createTermuxTool('Commix', 'Automated all-in-one OS command injection and exploitation tool.', Category.EXPLOITATION, 'https://github.com/commixproject/commix', [], ['python commix.py --help']),
    createTermuxTool('TxTool', 'A penetration testing toolkit.', Category.EXPLOITATION, 'https://github.com/kuburan/txtool', ['bash install.py'], ['python txtool.py']),
    createTermuxTool('XAttacker', 'Website vulnerability scanner and auto exploiter.', Category.WEB, 'https://github.com/Moham3dRiahi/XAttacker', [], ['perl XAttacker.pl -l <list.txt>']),
    
    // Sniffing and Spoofing
    createTermuxTool('Hack-Gmail', 'Script to check for common vulnerabilities in Gmail accounts.', Category.SNIFFING, 'https://github.com/ebadfd/hack-gmail', ['make'], ['./hack-gmail']),
    createTermuxTool('KnockMail', 'Verify if an email address exists or not.', Category.OSINT, 'https://github.com/4w4k3/KnockMail', ['pip install -r requirements.txt'], ['python knock.py -e <email>']),
    createTermuxTool('PwnedOrNot', 'Finds if your email account is pwned in data breaches.', Category.OSINT, 'https://github.com/thewhiteh4t/pwnedOrNot', ['pip install -r requirements.txt'], ['python pwnedornot.py -e <email>']),
    createTermuxTool('EmailPySpam', 'A powerful email spammer.', Category.UTILITY, 'https://github.com/maxsptz/emailpyspam', [], ['python emailpyspam.py']),
    createTermuxTool('Email-Spammer', 'A simple yet effective email spamming tool.', Category.UTILITY, 'https://github.com/mishakorzik/Email-Spammer', ['pip install -r requirements.txt'], ['python spammer.py']),

    // Web Attack Tools
    createTermuxTool('AdminHack', 'A tool to find admin panels of websites.', Category.WEB, 'https://github.com/mishakorzik/AdminHack', [], ['python adminhack.py <url>']),
    createTermuxTool('TakeOver', 'A tool to test for subdomain takeover vulnerabilities.', Category.WEB, 'https://github.com/mishakorzik/TakeOver', [], ['python takeover.py']),
    createTermuxTool('Blazy', 'A modern login page brute-forcer.', Category.PASSWORD, 'https://github.com/s0md3v/Blazy', ['pip install -r requirements.txt'], ['python blazy.py'], 'Termux', '2.1'),
    createTermuxTool('SqlMap', 'Automatic SQL injection and database takeover tool.', Category.WEB, 'https://github.com/sqlmapproject/sqlmap', [], ['python sqlmap.py -u <url>']),
    createTermuxTool('WebSploit', 'An advanced MITM framework.', Category.EXPLOITATION, 'https://github.com/websploit/websploit', ['pip install scapy'], ['python websploit.py']),
    createTermuxTool('SH33LL', 'A simple shell uploader for web servers.', Category.WEB, 'https://github.com/LOoLzeC/SH33LL', [], ['python sh33ll.py']),
    createTermuxTool('SqlMate', 'A friend of sqlmap. It helps to exploit SQL injection vulnerabilities.', Category.WEB, 'https://github.com/s0md3v/sqlmate', ['pip install -r requirements.txt'], ['python sqlmate.py -u <url>']),
    createTermuxTool('PyDDoser', 'A simple python DDoS script.', Category.DDOS, 'https://github.com/MisterDane/PyDDoser', [], ['python pyddoser.py -s <ip> -p <port> -t <threads>']),
    createTermuxTool('Ultra-DDos', 'A powerful DDoS tool.', Category.DDOS, 'https://github.com/CYSCORE/ultra-ddos', ['pip install -r requirements.txt'], ['python ultra-ddos.py']),
    createTermuxTool('WhatWeb', 'Next generation web scanner.', Category.RECON, 'https://github.com/urbanadventurer/WhatWeb', [], ['whatweb <url>']),
    createTermuxTool('Wfuzz', 'A tool for web application bruteforcing.', Category.WEB, 'https://github.com/xmendez/wfuzz', ['pip install wfuzz'], ['wfuzz -c -z file,wordlist.txt --hc 404 <url>/FUZZ']),
    
    // Cam & CCTV Hacking Tools
    createTermuxTool('Cam-Hackers', 'Access a camera remotely using a phishing link.', Category.EXPLOITATION, 'https://github.com/mishakorzik/Cam-Hackers', ['bash install.sh'], ['bash ch.sh']),
    createTermuxTool('Grabcam', 'A tool to hack a camera using a phishing link.', Category.EXPLOITATION, 'https://github.com/noob-hackers/grabcam', ['bash grabcam.sh'], ['Follow on-screen instructions']),
    createTermuxTool('CCTV-Hack', 'Tool to hack CCTV cameras.', Category.EXPLOITATION, 'https://github.com/tausifzaman/cctv-hack', ['pip install -r requirements.txt'], ['python cctv.py']),

    // Post exploitation & RATs
    createTermuxTool('PyShell', 'A simple python reverse shell.', Category.POST_EXPLOITATION, 'https://github.com/mishakorzik/PyShell', [], ['python pyshell.py']),
    createTermuxTool('Vegile', 'A kernel-level backdoor and rootkit.', Category.POST_EXPLOITATION, 'https://github.com/Screetsec/Vegile', ['make'], ['sudo ./vegile -i']),

    // SQL Injection Tools
    createTermuxTool('Debinject', 'A tool to perform SQL injection attacks.', Category.WEB, 'https://github.com/mishakorzik/Debinject', [], ['python debinject.py']),
    createTermuxTool('NoSqlMap', 'Automated NoSQL database enumeration and web application exploitation tool.', Category.WEB, 'https://github.com/codingo/NoSQLMap', ['python setup.py install'], ['python nosqlmap.py']),

    // SocialMedia Hacking
    createTermuxTool('Facebook-BruteForce', 'A script for brute-forcing Facebook accounts.', Category.PASSWORD, 'https://github.com/mishakorzik/Facebook-BruteForce', ['pip install requests mechanize'], ['python facebook.py']),
    createTermuxTool('Sherlock', 'Hunt down social media accounts by username across social networks.', Category.OSINT, 'https://github.com/sherlock-project/sherlock', ['python3 -m pip install -r requirements.txt'], ['python3 sherlock <username>'], 'Termux', '0.14.3'),
    createTermuxTool('UserFinder', 'Find usernames across over 75 social networks.', Category.OSINT, 'https://github.com/mishakorzik/UserFinder', ['pip install -r requirements.txt'], ['python userfinder.py -u <username>']),
    
    // SMS Spaming tools
    createTermuxTool('SMS-Bomber-300-Free', 'A powerful SMS bombing tool.', Category.UTILITY, 'https://github.com/mishakorzik/SMS-Bomber-300-Free', [], ['python sms.py']),
    createTermuxTool('TBomb', 'A tool for SMS and call bombing.', Category.UTILITY, 'https://github.com/TheSpeedX/TBomb', ['bash TBomb.sh'], ['./TBomb.sh']),
    
    // Phishing Attack Tools
    createTermuxTool('Setoolkit', 'The Social-Engineer Toolkit (SET).', Category.EXPLOITATION, 'https://github.com/trustedsec/social-engineer-toolkit', ['python setup.py'], ['sudo setoolkit']),
    createTermuxTool('SocialFish', 'An Educational Phishing Tool & Information Collector.', Category.EXPLOITATION, 'https://github.com/UndeadSec/SocialFish', ['pip install -r requirements.txt'], ['python SocialFish.py']),
    createTermuxTool('Zphisher', 'An automated phishing tool with 30+ templates.', Category.EXPLOITATION, 'https://github.com/htr-tech/zphisher', ['bash zphisher.sh'], ['./zphisher.sh']),
    createTermuxTool('ShellPhish', 'Phishing tool for 18 social media sites.', Category.EXPLOITATION, 'https://github.com/suljot/shellphish', ['bash shellphish.sh'], ['./shellphish.sh']),
    createTermuxTool('Saycheese', 'Grabs webcam shots from a target\'s phone or PC.', Category.EXPLOITATION, 'https://github.com/hangetzzu/saycheese', ['bash saycheese.sh'], ['./saycheese.sh']),
    createTermuxTool('Mask-Phish', 'Hide a phishing link under a convincing URL.', Category.EXPLOITATION, 'https://github.com/jaykali/maskphish', ['bash maskphish.sh'], ['./maskphish.sh']),
    createTermuxTool('I-See-You', 'Find exact location of a user with a phishing link.', Category.OSINT, 'https://github.com/Viralmaniar/I-See-You', ['bash I-See-You.sh'], ['./I-See-You.sh']),
    createTermuxTool('HiddenEye', 'Modern phishing tool with advanced functionality.', Category.EXPLOITATION, 'https://github.com/DarkSecDevelopers/HiddenEye-Legacy', ['pip3 install -r requirements.txt'], ['python3 HiddenEye.py']),
    createTermuxTool('BlackEye', 'The most complete phishing tool with 32 templates.', Category.EXPLOITATION, 'https://github.com/thelinuxchoice/blackeye', ['bash blackeye.sh'], ['./blackeye.sh']),
    
    // Hash cracking Tools
    createTermuxTool('Hasher', 'A tool to generate and identify hashes.', Category.PASSWORD, 'https://github.com/ciku370/hasher', [], ['python hasher.py']),
    createTermuxTool('Hash-Buster', 'A script to crack hashes.', Category.PASSWORD, 'https://github.com/s0md3v/Hash-Buster', [], ['python hash.py -s <hash>']),

    // Wordlist generator Tools
    createTermuxTool('Cupp', 'Common User Passwords Profiler.', Category.PASSWORD, 'https://github.com/Mebus/cupp', [], ['python cupp.py -i']),
    createTermuxTool('WlCreator', 'A simple wordlist generator.', Category.PASSWORD, 'https://github.com/mishakorzik/WlCreator', [], ['python wlcreator.py']),
    createTermuxTool('GoblinWordGenerator', 'A powerful wordlist generator.', Category.PASSWORD, 'https://github.com/mishakorzik/GoblinWordGenerator', [], ['python goblin.py']),
    
    // XSS Attack Tools
    createTermuxTool('XSSCon', 'A tool for finding XSS vulnerabilities.', Category.WEB, 'https://github.com/menkrep1337/XSSCon', ['pip install -r requirements.txt'], ['python xsscon.py -u <url>']),
    createTermuxTool('XanXSS', 'An advanced XSS scanner.', Category.WEB, 'https://github.com/Ekultek/XanXSS', ['pip install -r requirements.txt'], ['python xanxss.py -u <url> --crawl']),
    createTermuxTool('XSStrike', 'The most advanced XSS scanner.', Category.WEB, 'https://github.com/s0md3v/XSStrike', ['pip install -r requirements.txt'], ['python xsstrike.py -u <url>']),

    // Wireless Attack Tools
    createTermuxTool('Fluxion', 'A modern and feature-rich wifi auditing and social-engineering tool.', Category.WIRELESS, 'https://github.com/FluxionNetwork/fluxion', ['bash fluxion.sh -i'], ['./fluxion.sh']),
    createTermuxTool('Wifite2', 'An automated wireless attack tool.', Category.WIRELESS, 'https://github.com/derv82/wifite2', ['sudo python setup.py install'], ['sudo wifite']),
    createTermuxTool('Wifiphisher', 'Automated phishing attacks against Wi-Fi networks.', Category.WIRELESS, 'https://github.com/wifiphisher/wifiphisher', ['sudo python setup.py install'], ['sudo wifiphisher']),

    // Payload Creation
    createTermuxTool('TheFatRat', 'A massive exploiting tool to compile malware with popular payload.', Category.PAYLOAD_CREATION, 'https://github.com/Screetsec/TheFatRat', ['./setup.sh'], ['sudo ./fatrat']),
    createTermuxTool('MSFvenom Payload Creator', 'A tool to generate msfvenom payloads.', Category.PAYLOAD_CREATION, 'https://github.com/g0tmi1k/msfpc', ['bash msfpc.sh -h'], ['bash msfpc.sh windows meterpreter']),

    // Android Hacking
    createTermuxTool('Mob-Droid', 'A powerful Android RAT.', Category.ANDROID_HACKING, 'https://github.com/king-hacking/Mob-Droid', ['bash setup.sh'], ['python Mob-Droid.py']),
    createTermuxTool('Spycam', 'Tool to generate a link to capture images from a target\'s phone.', Category.ANDROID_HACKING, 'https://github.com/king-hacking/Spycam', ['bash termux_setup.sh'], ['bash spycam.sh']),

    // Steganography
    createTermuxTool('Steghide', 'A steganography program that hides data in various kinds of image and audio files.', Category.STEGANOGRAPHY, 'https://github.com/StefanoDeVuono/steghide', ['apt install steghide'], ['steghide embed -cf image.jpg -ef secret.txt']),

    // Reverse Engineering
    createTermuxTool('Radare2', 'A portable reversing framework.', Category.REVERSE_ENGINEERING, 'https://github.com/radareorg/radare2', ['sys/install.sh'], ['radare2 -d /bin/ls']),
];