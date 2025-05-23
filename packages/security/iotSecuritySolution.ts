import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * IoT Security solution configuration and resource information.
 *
 * Uses Azure REST API version 2019-08-01. In version 2.x of the Azure Native provider, it used API version 2019-08-01.
 *
 * Other available API versions: 2017-08-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native security [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class IotSecuritySolution extends pulumi.CustomResource {
    /**
     * Get an existing IotSecuritySolution resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IotSecuritySolution {
        return new IotSecuritySolution(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:security:IotSecuritySolution';

    /**
     * Returns true if the given object is an instance of IotSecuritySolution.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IotSecuritySolution {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IotSecuritySolution.__pulumiType;
    }

    /**
     * List of additional workspaces
     */
    public readonly additionalWorkspaces!: pulumi.Output<types.outputs.AdditionalWorkspacesPropertiesResponse[] | undefined>;
    /**
     * List of resources that were automatically discovered as relevant to the security solution.
     */
    public /*out*/ readonly autoDiscoveredResources!: pulumi.Output<string[]>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Disabled data sources. Disabling these data sources compromises the system.
     */
    public readonly disabledDataSources!: pulumi.Output<string[] | undefined>;
    /**
     * Resource display name.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * List of additional options for exporting to workspace data.
     */
    public readonly export!: pulumi.Output<string[] | undefined>;
    /**
     * IoT Hub resource IDs
     */
    public readonly iotHubs!: pulumi.Output<string[]>;
    /**
     * The resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * List of the configuration status for each recommendation type.
     */
    public readonly recommendationsConfiguration!: pulumi.Output<types.outputs.RecommendationConfigurationPropertiesResponse[] | undefined>;
    /**
     * Status of the IoT Security solution.
     */
    public readonly status!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Unmasked IP address logging status
     */
    public readonly unmaskedIpLoggingStatus!: pulumi.Output<string | undefined>;
    /**
     * Properties of the IoT Security solution's user defined resources.
     */
    public readonly userDefinedResources!: pulumi.Output<types.outputs.UserDefinedResourcesPropertiesResponse | undefined>;
    /**
     * Workspace resource ID
     */
    public readonly workspace!: pulumi.Output<string | undefined>;

    /**
     * Create a IotSecuritySolution resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IotSecuritySolutionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.iotHubs === undefined) && !opts.urn) {
                throw new Error("Missing required property 'iotHubs'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["additionalWorkspaces"] = args ? args.additionalWorkspaces : undefined;
            resourceInputs["disabledDataSources"] = args ? args.disabledDataSources : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["export"] = args ? args.export : undefined;
            resourceInputs["iotHubs"] = args ? args.iotHubs : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["recommendationsConfiguration"] = args ? args.recommendationsConfiguration : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["solutionName"] = args ? args.solutionName : undefined;
            resourceInputs["status"] = (args ? args.status : undefined) ?? "Enabled";
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["unmaskedIpLoggingStatus"] = (args ? args.unmaskedIpLoggingStatus : undefined) ?? "Disabled";
            resourceInputs["userDefinedResources"] = args ? args.userDefinedResources : undefined;
            resourceInputs["workspace"] = args ? args.workspace : undefined;
            resourceInputs["autoDiscoveredResources"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["additionalWorkspaces"] = undefined /*out*/;
            resourceInputs["autoDiscoveredResources"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["disabledDataSources"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["export"] = undefined /*out*/;
            resourceInputs["iotHubs"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["recommendationsConfiguration"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["unmaskedIpLoggingStatus"] = undefined /*out*/;
            resourceInputs["userDefinedResources"] = undefined /*out*/;
            resourceInputs["workspace"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:security/v20170801preview:IotSecuritySolution" }, { type: "azure-native:security/v20190801:IotSecuritySolution" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(IotSecuritySolution.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a IotSecuritySolution resource.
 */
export interface IotSecuritySolutionArgs {
    /**
     * List of additional workspaces
     */
    additionalWorkspaces?: pulumi.Input<pulumi.Input<types.inputs.AdditionalWorkspacesPropertiesArgs>[]>;
    /**
     * Disabled data sources. Disabling these data sources compromises the system.
     */
    disabledDataSources?: pulumi.Input<pulumi.Input<string | types.enums.DataSource>[]>;
    /**
     * Resource display name.
     */
    displayName: pulumi.Input<string>;
    /**
     * List of additional options for exporting to workspace data.
     */
    export?: pulumi.Input<pulumi.Input<string | types.enums.ExportData>[]>;
    /**
     * IoT Hub resource IDs
     */
    iotHubs: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * List of the configuration status for each recommendation type.
     */
    recommendationsConfiguration?: pulumi.Input<pulumi.Input<types.inputs.RecommendationConfigurationPropertiesArgs>[]>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the IoT Security solution.
     */
    solutionName?: pulumi.Input<string>;
    /**
     * Status of the IoT Security solution.
     */
    status?: pulumi.Input<string | types.enums.SecuritySolutionStatus>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Unmasked IP address logging status
     */
    unmaskedIpLoggingStatus?: pulumi.Input<string | types.enums.UnmaskedIpLoggingStatus>;
    /**
     * Properties of the IoT Security solution's user defined resources.
     */
    userDefinedResources?: pulumi.Input<types.inputs.UserDefinedResourcesPropertiesArgs>;
    /**
     * Workspace resource ID
     */
    workspace?: pulumi.Input<string>;
}