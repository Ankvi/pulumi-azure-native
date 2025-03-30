import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Uses Azure REST API version 2023-11-01-preview.
 */
export class ActionRequest extends pulumi.CustomResource {
    /**
     * Get an existing ActionRequest resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ActionRequest {
        return new ActionRequest(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:testbase:ActionRequest';

    /**
     * Returns true if the given object is an instance of ActionRequest.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ActionRequest {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ActionRequest.__pulumiType;
    }

    public /*out*/ readonly creationDate!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly preReleaseAccessRequestSpec!: pulumi.Output<types.outputs.PreReleaseAccessRequestSpecResponse | undefined>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    public readonly requestType!: pulumi.Output<string>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ActionRequest resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ActionRequestArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.requestType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'requestType'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.testBaseAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'testBaseAccountName'");
            }
            resourceInputs["actionRequestName"] = args ? args.actionRequestName : undefined;
            resourceInputs["preReleaseAccessRequestSpec"] = args ? args.preReleaseAccessRequestSpec : undefined;
            resourceInputs["requestType"] = args ? args.requestType : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["testBaseAccountName"] = args ? args.testBaseAccountName : undefined;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["preReleaseAccessRequestSpec"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["requestType"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:testbase/v20231101preview:ActionRequest" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ActionRequest.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ActionRequest resource.
 */
export interface ActionRequestArgs {
    actionRequestName?: pulumi.Input<string>;
    preReleaseAccessRequestSpec?: pulumi.Input<types.inputs.PreReleaseAccessRequestSpecArgs>;
    requestType: pulumi.Input<string | types.enums.RequestTypes>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource name of the Test Base Account.
     */
    testBaseAccountName: pulumi.Input<string>;
}