import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Active directory connector resource
 *
 * Uses Azure REST API version 2024-01-01. In version 2.x of the Azure Native provider, it used API version 2023-01-15-preview.
 *
 * Other available API versions: 2023-01-15-preview, 2024-05-01-preview, 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native azurearcdata [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ActiveDirectoryConnector extends pulumi.CustomResource {
    /**
     * Get an existing ActiveDirectoryConnector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ActiveDirectoryConnector {
        return new ActiveDirectoryConnector(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:azurearcdata:ActiveDirectoryConnector';

    /**
     * Returns true if the given object is an instance of ActiveDirectoryConnector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ActiveDirectoryConnector {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ActiveDirectoryConnector.__pulumiType;
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
     * null
     */
    public readonly properties!: pulumi.Output<types.outputs.ActiveDirectoryConnectorPropertiesResponse>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ActiveDirectoryConnector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ActiveDirectoryConnectorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.dataControllerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataControllerName'");
            }
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["activeDirectoryConnectorName"] = args ? args.activeDirectoryConnectorName : undefined;
            resourceInputs["dataControllerName"] = args ? args.dataControllerName : undefined;
            resourceInputs["properties"] = args ? (args.properties ? pulumi.output(args.properties).apply(types.inputs.activeDirectoryConnectorPropertiesArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:azurearcdata/v20220301preview:ActiveDirectoryConnector" }, { type: "azure-native:azurearcdata/v20220615preview:ActiveDirectoryConnector" }, { type: "azure-native:azurearcdata/v20230115preview:ActiveDirectoryConnector" }, { type: "azure-native:azurearcdata/v20240101:ActiveDirectoryConnector" }, { type: "azure-native:azurearcdata/v20240501preview:ActiveDirectoryConnector" }, { type: "azure-native:azurearcdata/v20250301preview:ActiveDirectoryConnector" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ActiveDirectoryConnector.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ActiveDirectoryConnector resource.
 */
export interface ActiveDirectoryConnectorArgs {
    /**
     * The name of the Active Directory connector instance
     */
    activeDirectoryConnectorName?: pulumi.Input<string>;
    /**
     * The name of the data controller
     */
    dataControllerName: pulumi.Input<string>;
    /**
     * null
     */
    properties: pulumi.Input<types.inputs.ActiveDirectoryConnectorPropertiesArgs>;
    /**
     * The name of the Azure resource group
     */
    resourceGroupName: pulumi.Input<string>;
}