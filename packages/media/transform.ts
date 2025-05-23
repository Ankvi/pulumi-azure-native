import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A Transform encapsulates the rules or instructions for generating desired outputs from input media, such as by transcoding or by extracting insights. After the Transform is created, it can be applied to input media by creating Jobs.
 *
 * Uses Azure REST API version 2022-07-01. In version 2.x of the Azure Native provider, it used API version 2022-07-01.
 *
 * Other available API versions: 2018-03-30-preview, 2018-06-01-preview, 2018-07-01, 2020-05-01, 2021-06-01, 2021-11-01, 2022-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native media [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Transform extends pulumi.CustomResource {
    /**
     * Get an existing Transform resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Transform {
        return new Transform(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:media:Transform';

    /**
     * Returns true if the given object is an instance of Transform.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Transform {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Transform.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The UTC date and time when the Transform was created, in 'YYYY-MM-DDThh:mm:ssZ' format.
     */
    public /*out*/ readonly created!: pulumi.Output<string>;
    /**
     * An optional verbose description of the Transform.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The UTC date and time when the Transform was last updated, in 'YYYY-MM-DDThh:mm:ssZ' format.
     */
    public /*out*/ readonly lastModified!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * An array of one or more TransformOutputs that the Transform should generate.
     */
    public readonly outputs!: pulumi.Output<types.outputs.TransformOutputResponse[]>;
    /**
     * The system metadata relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Transform resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TransformArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.outputs === undefined) && !opts.urn) {
                throw new Error("Missing required property 'outputs'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["outputs"] = args ? args.outputs : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["transformName"] = args ? args.transformName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["lastModified"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["lastModified"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["outputs"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:media/v20180330preview:Transform" }, { type: "azure-native:media/v20180601preview:Transform" }, { type: "azure-native:media/v20180701:Transform" }, { type: "azure-native:media/v20200501:Transform" }, { type: "azure-native:media/v20210601:Transform" }, { type: "azure-native:media/v20211101:Transform" }, { type: "azure-native:media/v20220501preview:Transform" }, { type: "azure-native:media/v20220701:Transform" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Transform.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Transform resource.
 */
export interface TransformArgs {
    /**
     * The Media Services account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * An optional verbose description of the Transform.
     */
    description?: pulumi.Input<string>;
    /**
     * An array of one or more TransformOutputs that the Transform should generate.
     */
    outputs: pulumi.Input<pulumi.Input<types.inputs.TransformOutputArgs>[]>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Transform name.
     */
    transformName?: pulumi.Input<string>;
}