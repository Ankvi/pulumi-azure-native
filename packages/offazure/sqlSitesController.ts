import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * SQL site web model.
 *
 * Uses Azure REST API version 2023-10-01-preview. In version 2.x of the Azure Native provider, it used API version 2023-06-06.
 *
 * Other available API versions: 2023-06-06, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native offazure [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class SqlSitesController extends pulumi.CustomResource {
    /**
     * Get an existing SqlSitesController resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SqlSitesController {
        return new SqlSitesController(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:offazure:SqlSitesController';

    /**
     * Returns true if the given object is an instance of SqlSitesController.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SqlSitesController {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SqlSitesController.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Gets or sets the discovery scenario.
     */
    public readonly discoveryScenario!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * provisioning state enum
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Gets the service endpoint.
     */
    public /*out*/ readonly serviceEndpoint!: pulumi.Output<string>;
    /**
     * Gets or sets the appliance details used by service to communicate
     *            
     * to the appliance.
     */
    public readonly siteAppliancePropertiesCollection!: pulumi.Output<types.outputs.SiteAppliancePropertiesResponse[] | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SqlSitesController resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SqlSitesControllerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.siteName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'siteName'");
            }
            resourceInputs["discoveryScenario"] = args ? args.discoveryScenario : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["siteAppliancePropertiesCollection"] = args ? args.siteAppliancePropertiesCollection : undefined;
            resourceInputs["siteName"] = args ? args.siteName : undefined;
            resourceInputs["sqlSiteName"] = args ? args.sqlSiteName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["serviceEndpoint"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["discoveryScenario"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["serviceEndpoint"] = undefined /*out*/;
            resourceInputs["siteAppliancePropertiesCollection"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:offazure/v20230606:SqlSitesController" }, { type: "azure-native:offazure/v20231001preview:SqlSitesController" }, { type: "azure-native:offazure/v20240501preview:SqlSitesController" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SqlSitesController.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SqlSitesController resource.
 */
export interface SqlSitesControllerArgs {
    /**
     * Gets or sets the discovery scenario.
     */
    discoveryScenario?: pulumi.Input<string | types.enums.SqlSitePropertiesDiscoveryScenario>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets the appliance details used by service to communicate
     *            
     * to the appliance.
     */
    siteAppliancePropertiesCollection?: pulumi.Input<pulumi.Input<types.inputs.SiteAppliancePropertiesArgs>[]>;
    /**
     * Site name
     */
    siteName: pulumi.Input<string>;
    /**
     * SQL site name.
     */
    sqlSiteName?: pulumi.Input<string>;
}