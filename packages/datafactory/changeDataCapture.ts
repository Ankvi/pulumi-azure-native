import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Change data capture resource type.
 * Azure REST API version: 2018-06-01.
 */
export class ChangeDataCapture extends pulumi.CustomResource {
    /**
     * Get an existing ChangeDataCapture resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ChangeDataCapture {
        return new ChangeDataCapture(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:datafactory:ChangeDataCapture';

    /**
     * Returns true if the given object is an instance of ChangeDataCapture.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ChangeDataCapture {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ChangeDataCapture.__pulumiType;
    }

    /**
     * A boolean to determine if the vnet configuration needs to be overwritten.
     */
    public readonly allowVNetOverride!: pulumi.Output<boolean | undefined>;
    /**
     * The description of the change data capture.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Etag identifies change in the resource.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The folder that this CDC is in. If not specified, CDC will appear at the root level.
     */
    public readonly folder!: pulumi.Output<types.outputs.ChangeDataCaptureResponseFolder | undefined>;
    /**
     * The resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * CDC policy
     */
    public readonly policy!: pulumi.Output<types.outputs.MapperPolicyResponse>;
    /**
     * List of sources connections that can be used as sources in the CDC.
     */
    public readonly sourceConnectionsInfo!: pulumi.Output<types.outputs.MapperSourceConnectionsInfoResponse[]>;
    /**
     * Status of the CDC as to if it is running or stopped.
     */
    public readonly status!: pulumi.Output<string | undefined>;
    /**
     * List of target connections that can be used as sources in the CDC.
     */
    public readonly targetConnectionsInfo!: pulumi.Output<types.outputs.MapperTargetConnectionsInfoResponse[]>;
    /**
     * The resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ChangeDataCapture resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ChangeDataCaptureArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.factoryName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'factoryName'");
            }
            if ((!args || args.policy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policy'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sourceConnectionsInfo === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceConnectionsInfo'");
            }
            if ((!args || args.targetConnectionsInfo === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetConnectionsInfo'");
            }
            resourceInputs["allowVNetOverride"] = args ? args.allowVNetOverride : undefined;
            resourceInputs["changeDataCaptureName"] = args ? args.changeDataCaptureName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["factoryName"] = args ? args.factoryName : undefined;
            resourceInputs["folder"] = args ? args.folder : undefined;
            resourceInputs["policy"] = args ? args.policy : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sourceConnectionsInfo"] = args ? args.sourceConnectionsInfo : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["targetConnectionsInfo"] = args ? args.targetConnectionsInfo : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["allowVNetOverride"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["folder"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["policy"] = undefined /*out*/;
            resourceInputs["sourceConnectionsInfo"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["targetConnectionsInfo"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datafactory/v20180601:ChangeDataCapture" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ChangeDataCapture.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ChangeDataCapture resource.
 */
export interface ChangeDataCaptureArgs {
    /**
     * A boolean to determine if the vnet configuration needs to be overwritten.
     */
    allowVNetOverride?: pulumi.Input<boolean>;
    /**
     * The change data capture name.
     */
    changeDataCaptureName?: pulumi.Input<string>;
    /**
     * The description of the change data capture.
     */
    description?: pulumi.Input<string>;
    /**
     * The factory name.
     */
    factoryName: pulumi.Input<string>;
    /**
     * The folder that this CDC is in. If not specified, CDC will appear at the root level.
     */
    folder?: pulumi.Input<types.inputs.ChangeDataCaptureFolderArgs>;
    /**
     * CDC policy
     */
    policy: pulumi.Input<types.inputs.MapperPolicyArgs>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * List of sources connections that can be used as sources in the CDC.
     */
    sourceConnectionsInfo: pulumi.Input<pulumi.Input<types.inputs.MapperSourceConnectionsInfoArgs>[]>;
    /**
     * Status of the CDC as to if it is running or stopped.
     */
    status?: pulumi.Input<string>;
    /**
     * List of target connections that can be used as sources in the CDC.
     */
    targetConnectionsInfo: pulumi.Input<pulumi.Input<types.inputs.MapperTargetConnectionsInfoArgs>[]>;
}
