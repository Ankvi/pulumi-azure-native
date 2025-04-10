import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The security connector resource.
 *
 * Uses Azure REST API version 2023-03-01-preview. In version 1.x of the Azure Native provider, it used API version 2021-07-01-preview.
 *
 * Other available API versions: 2021-07-01-preview, 2023-10-01-preview, 2024-03-01-preview, 2024-07-01-preview, 2024-08-01-preview.
 */
export class SecurityConnector extends pulumi.CustomResource {
    /**
     * Get an existing SecurityConnector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SecurityConnector {
        return new SecurityConnector(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:security:SecurityConnector';

    /**
     * Returns true if the given object is an instance of SecurityConnector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SecurityConnector {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SecurityConnector.__pulumiType;
    }

    /**
     * The security connector environment data.
     */
    public readonly environmentData!: pulumi.Output<types.outputs.AwsEnvironmentDataResponse | types.outputs.AzureDevOpsScopeEnvironmentDataResponse | types.outputs.GcpProjectEnvironmentDataResponse | types.outputs.GithubScopeEnvironmentDataResponse | types.outputs.GitlabScopeEnvironmentDataResponse | undefined>;
    /**
     * The multi cloud resource's cloud name.
     */
    public readonly environmentName!: pulumi.Output<string | undefined>;
    /**
     * Entity tag is used for comparing two or more entities from the same requested resource.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The multi cloud resource identifier (account id in case of AWS connector, project number in case of GCP connector).
     */
    public readonly hierarchyIdentifier!: pulumi.Output<string | undefined>;
    /**
     * The date on which the trial period will end, if applicable. Trial period exists for 30 days after upgrading to payed offerings.
     */
    public /*out*/ readonly hierarchyIdentifierTrialEndDate!: pulumi.Output<string>;
    /**
     * Kind of the resource
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Location where the resource is stored
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * A collection of offerings for the security connector.
     */
    public readonly offerings!: pulumi.Output<(types.outputs.CspmMonitorAwsOfferingResponse | types.outputs.CspmMonitorAzureDevOpsOfferingResponse | types.outputs.CspmMonitorGcpOfferingResponse | types.outputs.CspmMonitorGitLabOfferingResponse | types.outputs.CspmMonitorGithubOfferingResponse | types.outputs.DefenderCspmAwsOfferingResponse | types.outputs.DefenderCspmGcpOfferingResponse | types.outputs.DefenderFoDatabasesAwsOfferingResponse | types.outputs.DefenderForContainersAwsOfferingResponse | types.outputs.DefenderForContainersGcpOfferingResponse | types.outputs.DefenderForDatabasesGcpOfferingResponse | types.outputs.DefenderForDevOpsAzureDevOpsOfferingResponse | types.outputs.DefenderForDevOpsGitLabOfferingResponse | types.outputs.DefenderForDevOpsGithubOfferingResponse | types.outputs.DefenderForServersAwsOfferingResponse | types.outputs.DefenderForServersGcpOfferingResponse | types.outputs.InformationProtectionAwsOfferingResponse)[] | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * A list of key value pairs that describe the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SecurityConnector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecurityConnectorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["environmentData"] = args ? args.environmentData : undefined;
            resourceInputs["environmentName"] = args ? args.environmentName : undefined;
            resourceInputs["hierarchyIdentifier"] = args ? args.hierarchyIdentifier : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["offerings"] = args ? args.offerings : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["securityConnectorName"] = args ? args.securityConnectorName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["hierarchyIdentifierTrialEndDate"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["environmentData"] = undefined /*out*/;
            resourceInputs["environmentName"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["hierarchyIdentifier"] = undefined /*out*/;
            resourceInputs["hierarchyIdentifierTrialEndDate"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["offerings"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:security/v20210701preview:SecurityConnector" }, { type: "azure-native:security/v20211201preview:SecurityConnector" }, { type: "azure-native:security/v20220501preview:SecurityConnector" }, { type: "azure-native:security/v20220801preview:SecurityConnector" }, { type: "azure-native:security/v20230301preview:SecurityConnector" }, { type: "azure-native:security/v20231001preview:SecurityConnector" }, { type: "azure-native:security/v20240301preview:SecurityConnector" }, { type: "azure-native:security/v20240701preview:SecurityConnector" }, { type: "azure-native:security/v20240801preview:SecurityConnector" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SecurityConnector.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SecurityConnector resource.
 */
export interface SecurityConnectorArgs {
    /**
     * The security connector environment data.
     */
    environmentData?: pulumi.Input<types.inputs.AwsEnvironmentDataArgs | types.inputs.AzureDevOpsScopeEnvironmentDataArgs | types.inputs.GcpProjectEnvironmentDataArgs | types.inputs.GithubScopeEnvironmentDataArgs | types.inputs.GitlabScopeEnvironmentDataArgs>;
    /**
     * The multi cloud resource's cloud name.
     */
    environmentName?: pulumi.Input<string | types.enums.CloudName>;
    /**
     * The multi cloud resource identifier (account id in case of AWS connector, project number in case of GCP connector).
     */
    hierarchyIdentifier?: pulumi.Input<string>;
    /**
     * Kind of the resource
     */
    kind?: pulumi.Input<string>;
    /**
     * Location where the resource is stored
     */
    location?: pulumi.Input<string>;
    /**
     * A collection of offerings for the security connector.
     */
    offerings?: pulumi.Input<pulumi.Input<types.inputs.CspmMonitorAwsOfferingArgs | types.inputs.CspmMonitorAzureDevOpsOfferingArgs | types.inputs.CspmMonitorGcpOfferingArgs | types.inputs.CspmMonitorGitLabOfferingArgs | types.inputs.CspmMonitorGithubOfferingArgs | types.inputs.DefenderCspmAwsOfferingArgs | types.inputs.DefenderCspmGcpOfferingArgs | types.inputs.DefenderFoDatabasesAwsOfferingArgs | types.inputs.DefenderForContainersAwsOfferingArgs | types.inputs.DefenderForContainersGcpOfferingArgs | types.inputs.DefenderForDatabasesGcpOfferingArgs | types.inputs.DefenderForDevOpsAzureDevOpsOfferingArgs | types.inputs.DefenderForDevOpsGitLabOfferingArgs | types.inputs.DefenderForDevOpsGithubOfferingArgs | types.inputs.DefenderForServersAwsOfferingArgs | types.inputs.DefenderForServersGcpOfferingArgs | types.inputs.InformationProtectionAwsOfferingArgs>[]>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The security connector name.
     */
    securityConnectorName?: pulumi.Input<string>;
    /**
     * A list of key value pairs that describe the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}