import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Security settings proxy resource
 *
 * Uses Azure REST API version 2024-04-01. In version 2.x of the Azure Native provider, it used API version 2023-11-01-preview.
 *
 * Other available API versions: 2023-11-01-preview, 2024-01-01, 2024-02-15-preview, 2024-09-01-preview, 2024-12-01-preview, 2025-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native azurestackhci [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class SecuritySetting extends pulumi.CustomResource {
    /**
     * Get an existing SecuritySetting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SecuritySetting {
        return new SecuritySetting(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:azurestackhci:SecuritySetting';

    /**
     * Returns true if the given object is an instance of SecuritySetting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SecuritySetting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SecuritySetting.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The status of the last operation.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Secured Core Compliance Assignment
     */
    public readonly securedCoreComplianceAssignment!: pulumi.Output<string | undefined>;
    /**
     * Security Compliance Status
     */
    public /*out*/ readonly securityComplianceStatus!: pulumi.Output<types.outputs.SecurityComplianceStatusResponse>;
    /**
     * SMB encryption for intra-cluster traffic Compliance Assignment
     */
    public readonly smbEncryptionForIntraClusterTrafficComplianceAssignment!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * WDAC Compliance Assignment
     */
    public readonly wdacComplianceAssignment!: pulumi.Output<string | undefined>;

    /**
     * Create a SecuritySetting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecuritySettingArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["securedCoreComplianceAssignment"] = (args ? args.securedCoreComplianceAssignment : undefined) ?? "Audit";
            resourceInputs["securitySettingsName"] = args ? args.securitySettingsName : undefined;
            resourceInputs["smbEncryptionForIntraClusterTrafficComplianceAssignment"] = (args ? args.smbEncryptionForIntraClusterTrafficComplianceAssignment : undefined) ?? "Audit";
            resourceInputs["wdacComplianceAssignment"] = (args ? args.wdacComplianceAssignment : undefined) ?? "Audit";
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["securityComplianceStatus"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["securedCoreComplianceAssignment"] = undefined /*out*/;
            resourceInputs["securityComplianceStatus"] = undefined /*out*/;
            resourceInputs["smbEncryptionForIntraClusterTrafficComplianceAssignment"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["wdacComplianceAssignment"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:azurestackhci/v20231101preview:SecuritySetting" }, { type: "azure-native:azurestackhci/v20240101:SecuritySetting" }, { type: "azure-native:azurestackhci/v20240215preview:SecuritySetting" }, { type: "azure-native:azurestackhci/v20240401:SecuritySetting" }, { type: "azure-native:azurestackhci/v20240901preview:SecuritySetting" }, { type: "azure-native:azurestackhci/v20241201preview:SecuritySetting" }, { type: "azure-native:azurestackhci/v20250201preview:SecuritySetting" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SecuritySetting.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SecuritySetting resource.
 */
export interface SecuritySettingArgs {
    /**
     * The name of the cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Secured Core Compliance Assignment
     */
    securedCoreComplianceAssignment?: pulumi.Input<string | types.enums.ComplianceAssignmentType>;
    /**
     * Name of security setting
     */
    securitySettingsName?: pulumi.Input<string>;
    /**
     * SMB encryption for intra-cluster traffic Compliance Assignment
     */
    smbEncryptionForIntraClusterTrafficComplianceAssignment?: pulumi.Input<string | types.enums.ComplianceAssignmentType>;
    /**
     * WDAC Compliance Assignment
     */
    wdacComplianceAssignment?: pulumi.Input<string | types.enums.ComplianceAssignmentType>;
}