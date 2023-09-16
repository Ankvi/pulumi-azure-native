import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace scom {
    /**
     * The properties to maximize savings by using Azure Hybrid Benefit
     */
    export interface AzureHybridBenefitPropertiesArgs {
        /**
         * SCOM license type. Maximize savings by using license you already own
         */
        scomLicenseType?: pulumi.Input<string | enums.HybridLicenseType>;
        /**
         * SQL Server license type. Maximize savings by using Azure Hybrid Benefit for SQL Server with license you already own
         */
        sqlServerLicenseType?: pulumi.Input<string | enums.HybridLicenseType>;
        /**
         * Specifies that the image or disk that is being used was licensed on-premises. <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json)
         */
        windowsServerLicenseType?: pulumi.Input<string | enums.HybridLicenseType>;
    }

    /**
     * The properties of database instance
     */
    export interface DatabaseInstancePropertiesArgs {
        /**
         * Resource Id of existing database instance
         */
        databaseInstanceId?: pulumi.Input<string>;
    }

    /**
     * The properties of domain controller to which SCOM and SQL servers join for AuthN/AuthZ.
     */
    export interface DomainControllerPropertiesArgs {
        /**
         * IP address of DNS server 
         */
        dnsServer?: pulumi.Input<string>;
        /**
         * Fully qualified domain name
         */
        domainName?: pulumi.Input<string>;
        /**
         * Organizational Unit path in which the SCOM servers will be present
         */
        ouPath?: pulumi.Input<string>;
    }
    /**
     * domainControllerPropertiesArgsProvideDefaults sets the appropriate defaults for DomainControllerPropertiesArgs
     */
    export function domainControllerPropertiesArgsProvideDefaults(val: DomainControllerPropertiesArgs): DomainControllerPropertiesArgs {
        return {
            ...val,
            ouPath: (val.ouPath) ?? "",
        };
    }

    /**
     * Get Domain user name and password from key vault
     */
    export interface DomainUserCredentialsArgs {
        /**
         * Key vault url to get the domain username and password
         */
        keyVaultUrl?: pulumi.Input<string>;
        /**
         * Domain Password secret 
         */
        passwordSecret?: pulumi.Input<string>;
        /**
         * Domain user name secret 
         */
        userNameSecret?: pulumi.Input<string>;
    }

    /**
     * Gmsa Details
     */
    export interface GmsaDetailsArgs {
        /**
         * Frontend DNS name for Load Balancer which will be used by Agents to initiate communication
         */
        dnsName?: pulumi.Input<string>;
        /**
         * gMSA account under which context all Management Server services will run
         */
        gmsaAccount?: pulumi.Input<string>;
        /**
         * Frontend IP configuration for Load Balancer, which should be an available IP in customer VNet
         */
        loadBalancerIP?: pulumi.Input<string>;
        /**
         * OnPrem AD Computer Group where we will join VMs for ease of management
         */
        managementServerGroupName?: pulumi.Input<string>;
    }

    /**
     * Azure Active Directory identity configuration for a resource.
     */
    export interface ManagedIdentityArgs {
        /**
         * The identity type
         */
        type?: pulumi.Input<string | enums.ManagedIdentityType>;
        /**
         * The resource ids of the user assigned identities to use
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The properties of a SCOM instance resource
     */
    export interface MonitoringInstancePropertiesArgs {
        /**
         * The properties to enable Azure Hybrid benefit for various SCOM infrastructure license.
         */
        azureHybridBenefit?: pulumi.Input<AzureHybridBenefitPropertiesArgs>;
        /**
         * The database instance where the SCOM Operational and Warehouse databases will be stored.
         */
        databaseInstance?: pulumi.Input<DatabaseInstancePropertiesArgs>;
        /**
         * Domain controller details
         */
        domainController?: pulumi.Input<DomainControllerPropertiesArgs>;
        /**
         * Domain user which will be used to join VMs to domain and login to VMs.
         */
        domainUserCredentials?: pulumi.Input<DomainUserCredentialsArgs>;
        /**
         * Gmsa Details for load balancer and vmss
         */
        gmsaDetails?: pulumi.Input<GmsaDetailsArgs>;
        /**
         * Virtual Network subnet id on which Aquila instance will be provisioned
         */
        vNetSubnetId?: pulumi.Input<string>;
    }
    /**
     * monitoringInstancePropertiesArgsProvideDefaults sets the appropriate defaults for MonitoringInstancePropertiesArgs
     */
    export function monitoringInstancePropertiesArgsProvideDefaults(val: MonitoringInstancePropertiesArgs): MonitoringInstancePropertiesArgs {
        return {
            ...val,
            domainController: (val.domainController ? pulumi.output(val.domainController).apply(domainControllerPropertiesArgsProvideDefaults) : undefined),
        };
    }

    export namespace v20230707preview {
        /**
         * The properties to maximize savings by using Azure Hybrid Benefit
         */
        export interface AzureHybridBenefitPropertiesArgs {
            /**
             * SCOM license type. Maximize savings by using license you already own
             */
            scomLicenseType?: pulumi.Input<string | enums.v20230707preview.HybridLicenseType>;
            /**
             * SQL Server license type. Maximize savings by using Azure Hybrid Benefit for SQL Server with license you already own
             */
            sqlServerLicenseType?: pulumi.Input<string | enums.v20230707preview.HybridLicenseType>;
            /**
             * Specifies that the image or disk that is being used was licensed on-premises. <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json)
             */
            windowsServerLicenseType?: pulumi.Input<string | enums.v20230707preview.HybridLicenseType>;
        }

        /**
         * The properties of database instance
         */
        export interface DatabaseInstancePropertiesArgs {
            /**
             * Resource Id of existing database instance
             */
            databaseInstanceId?: pulumi.Input<string>;
        }

        /**
         * The properties of domain controller to which SCOM and SQL servers join for AuthN/AuthZ.
         */
        export interface DomainControllerPropertiesArgs {
            /**
             * IP address of DNS server 
             */
            dnsServer?: pulumi.Input<string>;
            /**
             * Fully qualified domain name
             */
            domainName?: pulumi.Input<string>;
            /**
             * Organizational Unit path in which the SCOM servers will be present
             */
            ouPath?: pulumi.Input<string>;
        }
        /**
         * domainControllerPropertiesArgsProvideDefaults sets the appropriate defaults for DomainControllerPropertiesArgs
         */
        export function domainControllerPropertiesArgsProvideDefaults(val: DomainControllerPropertiesArgs): DomainControllerPropertiesArgs {
            return {
                ...val,
                ouPath: (val.ouPath) ?? "",
            };
        }

        /**
         * Get Domain user name and password from key vault
         */
        export interface DomainUserCredentialsArgs {
            /**
             * Key vault url to get the domain username and password
             */
            keyVaultUrl?: pulumi.Input<string>;
            /**
             * Domain Password secret 
             */
            passwordSecret?: pulumi.Input<string>;
            /**
             * Domain user name secret 
             */
            userNameSecret?: pulumi.Input<string>;
        }

        /**
         * Gmsa Details
         */
        export interface GmsaDetailsArgs {
            /**
             * Frontend DNS name for Load Balancer which will be used by Agents to initiate communication
             */
            dnsName?: pulumi.Input<string>;
            /**
             * gMSA account under which context all Management Server services will run
             */
            gmsaAccount?: pulumi.Input<string>;
            /**
             * Frontend IP configuration for Load Balancer, which should be an available IP in customer VNet
             */
            loadBalancerIP?: pulumi.Input<string>;
            /**
             * OnPrem AD Computer Group where we will join VMs for ease of management
             */
            managementServerGroupName?: pulumi.Input<string>;
        }

        /**
         * Azure Active Directory identity configuration for a resource.
         */
        export interface ManagedIdentityArgs {
            /**
             * The identity type
             */
            type?: pulumi.Input<string | enums.v20230707preview.ManagedIdentityType>;
            /**
             * The resource ids of the user assigned identities to use
             */
            userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * The properties of a SCOM instance resource
         */
        export interface MonitoringInstancePropertiesArgs {
            /**
             * The properties to enable Azure Hybrid benefit for various SCOM infrastructure license.
             */
            azureHybridBenefit?: pulumi.Input<v20230707preview.AzureHybridBenefitPropertiesArgs>;
            /**
             * The database instance where the SCOM Operational and Warehouse databases will be stored.
             */
            databaseInstance?: pulumi.Input<v20230707preview.DatabaseInstancePropertiesArgs>;
            /**
             * Domain controller details
             */
            domainController?: pulumi.Input<v20230707preview.DomainControllerPropertiesArgs>;
            /**
             * Domain user which will be used to join VMs to domain and login to VMs.
             */
            domainUserCredentials?: pulumi.Input<v20230707preview.DomainUserCredentialsArgs>;
            /**
             * Gmsa Details for load balancer and vmss
             */
            gmsaDetails?: pulumi.Input<v20230707preview.GmsaDetailsArgs>;
            /**
             * Virtual Network subnet id on which Aquila instance will be provisioned
             */
            vNetSubnetId?: pulumi.Input<string>;
        }
        /**
         * monitoringInstancePropertiesArgsProvideDefaults sets the appropriate defaults for MonitoringInstancePropertiesArgs
         */
        export function monitoringInstancePropertiesArgsProvideDefaults(val: MonitoringInstancePropertiesArgs): MonitoringInstancePropertiesArgs {
            return {
                ...val,
                domainController: (val.domainController ? pulumi.output(val.domainController).apply(v20230707preview.domainControllerPropertiesArgsProvideDefaults) : undefined),
            };
        }

    }
}
