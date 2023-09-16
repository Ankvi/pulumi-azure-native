import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Class representing a database script.
 * Azure REST API version: 2022-12-29. Prior API version in Azure Native 1.x: 2021-01-01
 */
export class Script extends pulumi.CustomResource {
    /**
     * Get an existing Script resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Script {
        return new Script(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:kusto:Script';

    /**
     * Returns true if the given object is an instance of Script.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Script {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Script.__pulumiType;
    }

    /**
     * Flag that indicates whether to continue if one of the command fails.
     */
    public readonly continueOnErrors!: pulumi.Output<boolean | undefined>;
    /**
     * A unique string. If changed the script will be applied again.
     */
    public readonly forceUpdateTag!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioned state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The url to the KQL script blob file. Must not be used together with scriptContent property
     */
    public readonly scriptUrl!: pulumi.Output<string | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.kusto.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Script resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScriptArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.databaseName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databaseName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["continueOnErrors"] = (args ? args.continueOnErrors : undefined) ?? false;
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["forceUpdateTag"] = args ? args.forceUpdateTag : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scriptContent"] = args ? args.scriptContent : undefined;
            resourceInputs["scriptName"] = args ? args.scriptName : undefined;
            resourceInputs["scriptUrl"] = args ? args.scriptUrl : undefined;
            resourceInputs["scriptUrlSasToken"] = args ? args.scriptUrlSasToken : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["continueOnErrors"] = undefined /*out*/;
            resourceInputs["forceUpdateTag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["scriptUrl"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:kusto/v20210101:Script" }, { type: "azure-native:kusto/v20210827:Script" }, { type: "azure-native:kusto/v20220201:Script" }, { type: "azure-native:kusto/v20220707:Script" }, { type: "azure-native:kusto/v20221111:Script" }, { type: "azure-native:kusto/v20221229:Script" }, { type: "azure-native:kusto/v20230502:Script" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Script.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Script resource.
 */
export interface ScriptArgs {
    /**
     * The name of the Kusto cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * Flag that indicates whether to continue if one of the command fails.
     */
    continueOnErrors?: pulumi.Input<boolean>;
    /**
     * The name of the database in the Kusto cluster.
     */
    databaseName: pulumi.Input<string>;
    /**
     * A unique string. If changed the script will be applied again.
     */
    forceUpdateTag?: pulumi.Input<string>;
    /**
     * The name of the resource group containing the Kusto cluster.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The script content. This property should be used when the script is provide inline and not through file in a SA. Must not be used together with scriptUrl and scriptUrlSasToken properties.
     */
    scriptContent?: pulumi.Input<string>;
    /**
     * The name of the Kusto database script.
     */
    scriptName?: pulumi.Input<string>;
    /**
     * The url to the KQL script blob file. Must not be used together with scriptContent property
     */
    scriptUrl?: pulumi.Input<string>;
    /**
     * The SaS token that provide read access to the file which contain the script. Must be provided when using scriptUrl property.
     */
    scriptUrlSasToken?: pulumi.Input<string>;
}
