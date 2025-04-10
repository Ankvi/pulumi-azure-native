import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A logic app extension resource
 *
 * Uses Azure REST API version 2024-02-02-preview.
 *
 * Other available API versions: 2024-08-02-preview, 2024-10-02-preview.
 */
export class LogicApp extends pulumi.CustomResource {
    /**
     * Get an existing LogicApp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): LogicApp {
        return new LogicApp(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:app:LogicApp';

    /**
     * Returns true if the given object is an instance of LogicApp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LogicApp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LogicApp.__pulumiType;
    }

    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a LogicApp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LogicAppArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.containerAppName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'containerAppName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["containerAppName"] = args ? args.containerAppName : undefined;
            resourceInputs["logicAppName"] = args ? args.logicAppName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:app/v20240202preview:LogicApp" }, { type: "azure-native:app/v20240802preview:LogicApp" }, { type: "azure-native:app/v20241002preview:LogicApp" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(LogicApp.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a LogicApp resource.
 */
export interface LogicAppArgs {
    /**
     * Name of the Container App.
     */
    containerAppName: pulumi.Input<string>;
    /**
     * Name of the Logic App, the extension resource.
     */
    logicAppName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}