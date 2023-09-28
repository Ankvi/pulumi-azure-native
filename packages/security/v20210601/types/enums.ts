export const AssessmentStatusCode = {
    /**
     * The resource is healthy
     */
    Healthy: "Healthy",
    /**
     * The resource has a security issue that needs to be addressed
     */
    Unhealthy: "Unhealthy",
    /**
     * Assessment for this resource did not happen
     */
    NotApplicable: "NotApplicable",
} as const;

/**
 * Programmatic code for the status of the assessment
 */
export type AssessmentStatusCode = (typeof AssessmentStatusCode)[keyof typeof AssessmentStatusCode];

export const AssessmentType = {
    /**
     * Microsoft Defender for Cloud managed assessments
     */
    BuiltIn: "BuiltIn",
    /**
     * User defined policies that are automatically ingested from Azure Policy to Microsoft Defender for Cloud
     */
    CustomPolicy: "CustomPolicy",
    /**
     * User assessments pushed directly by the user or other third party to Microsoft Defender for Cloud
     */
    CustomerManaged: "CustomerManaged",
    /**
     * An assessment that was created by a verified 3rd party if the user connected it to ASC
     */
    VerifiedPartner: "VerifiedPartner",
} as const;

/**
 * BuiltIn if the assessment based on built-in Azure Policy definition, Custom if the assessment based on custom Azure Policy definition
 */
export type AssessmentType = (typeof AssessmentType)[keyof typeof AssessmentType];

export const Categories = {
    Compute: "Compute",
    Networking: "Networking",
    Data: "Data",
    IdentityAndAccess: "IdentityAndAccess",
    IoT: "IoT",
} as const;

/**
 * The categories of resource that is at risk when the assessment is unhealthy
 */
export type Categories = (typeof Categories)[keyof typeof Categories];

export const ImplementationEffort = {
    Low: "Low",
    Moderate: "Moderate",
    High: "High",
} as const;

/**
 * The implementation effort required to remediate this assessment
 */
export type ImplementationEffort = (typeof ImplementationEffort)[keyof typeof ImplementationEffort];

export const Severity = {
    Low: "Low",
    Medium: "Medium",
    High: "High",
} as const;

/**
 * The severity level of the assessment
 */
export type Severity = (typeof Severity)[keyof typeof Severity];

export const Source = {
    /**
     * Resource is in Azure
     */
    Azure: "Azure",
    /**
     * Resource in an on premise machine connected to Azure cloud
     */
    OnPremise: "OnPremise",
    /**
     * SQL Resource in an on premise machine connected to Azure cloud
     */
    OnPremiseSql: "OnPremiseSql",
} as const;

/**
 * The platform where the assessed resource resides
 */
export type Source = (typeof Source)[keyof typeof Source];

export const Tactics = {
    Reconnaissance: "Reconnaissance",
    Resource_Development: "Resource Development",
    Initial_Access: "Initial Access",
    Execution: "Execution",
    Persistence: "Persistence",
    Privilege_Escalation: "Privilege Escalation",
    Defense_Evasion: "Defense Evasion",
    Credential_Access: "Credential Access",
    Discovery: "Discovery",
    Lateral_Movement: "Lateral Movement",
    Collection: "Collection",
    Command_and_Control: "Command and Control",
    Exfiltration: "Exfiltration",
    Impact: "Impact",
} as const;

/**
 * Tactic of the assessment
 */
export type Tactics = (typeof Tactics)[keyof typeof Tactics];

export const Techniques = {
    Abuse_Elevation_Control_Mechanism: "Abuse Elevation Control Mechanism",
    Access_Token_Manipulation: "Access Token Manipulation",
    Account_Discovery: "Account Discovery",
    Account_Manipulation: "Account Manipulation",
    Active_Scanning: "Active Scanning",
    Application_Layer_Protocol: "Application Layer Protocol",
    Audio_Capture: "Audio Capture",
    Boot_or_Logon_Autostart_Execution: "Boot or Logon Autostart Execution",
    Boot_or_Logon_Initialization_Scripts: "Boot or Logon Initialization Scripts",
    Brute_Force: "Brute Force",
    Cloud_Infrastructure_Discovery: "Cloud Infrastructure Discovery",
    Cloud_Service_Dashboard: "Cloud Service Dashboard",
    Cloud_Service_Discovery: "Cloud Service Discovery",
    Command_and_Scripting_Interpreter: "Command and Scripting Interpreter",
    Compromise_Client_Software_Binary: "Compromise Client Software Binary",
    Compromise_Infrastructure: "Compromise Infrastructure",
    Container_and_Resource_Discovery: "Container and Resource Discovery",
    Create_Account: "Create Account",
    Create_or_Modify_System_Process: "Create or Modify System Process",
    Credentials_from_Password_Stores: "Credentials from Password Stores",
    Data_Destruction: "Data Destruction",
    Data_Encrypted_for_Impact: "Data Encrypted for Impact",
    Data_from_Cloud_Storage_Object: "Data from Cloud Storage Object",
    Data_from_Configuration_Repository: "Data from Configuration Repository",
    Data_from_Information_Repositories: "Data from Information Repositories",
    Data_from_Local_System: "Data from Local System",
    Data_Manipulation: "Data Manipulation",
    Data_Staged: "Data Staged",
    Defacement: "Defacement",
    Deobfuscate_Decode_Files_or_Information: "Deobfuscate/Decode Files or Information",
    Disk_Wipe: "Disk Wipe",
    Domain_Trust_Discovery: "Domain Trust Discovery",
    Drive_by_Compromise: "Drive-by Compromise",
    Dynamic_Resolution: "Dynamic Resolution",
    Endpoint_Denial_of_Service: "Endpoint Denial of Service",
    Event_Triggered_Execution: "Event Triggered Execution",
    Exfiltration_Over_Alternative_Protocol: "Exfiltration Over Alternative Protocol",
    Exploit_Public_Facing_Application: "Exploit Public-Facing Application",
    Exploitation_for_Client_Execution: "Exploitation for Client Execution",
    Exploitation_for_Credential_Access: "Exploitation for Credential Access",
    Exploitation_for_Defense_Evasion: "Exploitation for Defense Evasion",
    Exploitation_for_Privilege_Escalation: "Exploitation for Privilege Escalation",
    Exploitation_of_Remote_Services: "Exploitation of Remote Services",
    External_Remote_Services: "External Remote Services",
    Fallback_Channels: "Fallback Channels",
    File_and_Directory_Discovery: "File and Directory Discovery",
    Gather_Victim_Network_Information: "Gather Victim Network Information",
    Hide_Artifacts: "Hide Artifacts",
    Hijack_Execution_Flow: "Hijack Execution Flow",
    Impair_Defenses: "Impair Defenses",
    Implant_Container_Image: "Implant Container Image",
    Indicator_Removal_on_Host: "Indicator Removal on Host",
    Indirect_Command_Execution: "Indirect Command Execution",
    Ingress_Tool_Transfer: "Ingress Tool Transfer",
    Input_Capture: "Input Capture",
    Inter_Process_Communication: "Inter-Process Communication",
    Lateral_Tool_Transfer: "Lateral Tool Transfer",
    Man_in_the_Middle: "Man-in-the-Middle",
    Masquerading: "Masquerading",
    Modify_Authentication_Process: "Modify Authentication Process",
    Modify_Registry: "Modify Registry",
    Network_Denial_of_Service: "Network Denial of Service",
    Network_Service_Scanning: "Network Service Scanning",
    Network_Sniffing: "Network Sniffing",
    Non_Application_Layer_Protocol: "Non-Application Layer Protocol",
    Non_Standard_Port: "Non-Standard Port",
    Obtain_Capabilities: "Obtain Capabilities",
    Obfuscated_Files_or_Information: "Obfuscated Files or Information",
    Office_Application_Startup: "Office Application Startup",
    OS_Credential_Dumping: "OS Credential Dumping",
    Permission_Groups_Discovery: "Permission Groups Discovery",
    Phishing: "Phishing",
    Pre_OS_Boot: "Pre-OS Boot",
    Process_Discovery: "Process Discovery",
    Process_Injection: "Process Injection",
    Protocol_Tunneling: "Protocol Tunneling",
    Proxy: "Proxy",
    Query_Registry: "Query Registry",
    Remote_Access_Software: "Remote Access Software",
    Remote_Service_Session_Hijacking: "Remote Service Session Hijacking",
    Remote_Services: "Remote Services",
    Remote_System_Discovery: "Remote System Discovery",
    Resource_Hijacking: "Resource Hijacking",
    Scheduled_Task_Job: "Scheduled Task/Job",
    Screen_Capture: "Screen Capture",
    Search_Victim_Owned_Websites: "Search Victim-Owned Websites",
    Server_Software_Component: "Server Software Component",
    Service_Stop: "Service Stop",
    Signed_Binary_Proxy_Execution: "Signed Binary Proxy Execution",
    Software_Deployment_Tools: "Software Deployment Tools",
    SQL_Stored_Procedures: "SQL Stored Procedures",
    Steal_or_Forge_Kerberos_Tickets: "Steal or Forge Kerberos Tickets",
    Subvert_Trust_Controls: "Subvert Trust Controls",
    Supply_Chain_Compromise: "Supply Chain Compromise",
    System_Information_Discovery: "System Information Discovery",
    Taint_Shared_Content: "Taint Shared Content",
    Traffic_Signaling: "Traffic Signaling",
    Transfer_Data_to_Cloud_Account: "Transfer Data to Cloud Account",
    Trusted_Relationship: "Trusted Relationship",
    Unsecured_Credentials: "Unsecured Credentials",
    User_Execution: "User Execution",
    Valid_Accounts: "Valid Accounts",
    Windows_Management_Instrumentation: "Windows Management Instrumentation",
    File_and_Directory_Permissions_Modification: "File and Directory Permissions Modification",
} as const;

/**
 * Techniques of the assessment
 */
export type Techniques = (typeof Techniques)[keyof typeof Techniques];

export const Threats = {
    AccountBreach: "accountBreach",
    DataExfiltration: "dataExfiltration",
    DataSpillage: "dataSpillage",
    MaliciousInsider: "maliciousInsider",
    ElevationOfPrivilege: "elevationOfPrivilege",
    ThreatResistance: "threatResistance",
    MissingCoverage: "missingCoverage",
    DenialOfService: "denialOfService",
} as const;

/**
 * Threats impact of the assessment
 */
export type Threats = (typeof Threats)[keyof typeof Threats];

export const UserImpact = {
    Low: "Low",
    Moderate: "Moderate",
    High: "High",
} as const;

/**
 * The user impact of the assessment
 */
export type UserImpact = (typeof UserImpact)[keyof typeof UserImpact];
