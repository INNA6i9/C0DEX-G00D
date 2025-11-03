
export enum Category {
    RECON = 'Reconnaissance',
    WEB = 'Web Exploitation',
    DDOS = 'DDoS & Stressing',
    PASSWORD = 'Password Attacks',
    WIRELESS = 'Wireless Attacks',
    EXPLOITATION = 'Exploitation',
    FORENSICS = 'Forensics',
    SNIFFING = 'Sniffing & Spoofing',
    OSINT = 'OSINT',
    UTILITY = 'Utility & Misc',
    MALWARE = 'Malware Analysis',
    POST_EXPLOITATION = 'Post-Exploitation',
    ANONYMITY = 'Anonymity & Hiding',
    PAYLOAD_CREATION = 'Payload Creation',
    REVERSE_ENGINEERING = 'Reverse Engineering',
    STEGANOGRAPHY = 'Steganography',
    ANDROID_HACKING = 'Android Hacking'
}

export interface Tool {
    name: string;
    description: string;
    category: Category;
    installation: string[];
    usage: string[];
    platform: 'Termux' | 'Kali';
    icon?: string;
    githubUrl?: string;
    version?: string;
}