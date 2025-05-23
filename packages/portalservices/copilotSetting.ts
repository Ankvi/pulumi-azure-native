import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The copilot settings tenant resource definition.
 *
 * Uses Azure REST API version 2024-04-01. In version 2.x of the Azure Native provider, it used API version 2024-04-01-preview.
 *
 * Other available API versions: 2024-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native portalservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class CopilotSetting extends pulumi.CustomResource {
    /**
     * Get an existing CopilotSetting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CopilotSetting {
        return new CopilotSetting(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:portalservices:CopilotSetting';

    /**
     * Returns true if the given object is an instance of CopilotSetting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CopilotSetting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CopilotSetting.__pulumiType;
    }

    /**
     * Boolean indicating if role-based access control is enabled for copilot in this tenant.
     */
    public readonly accessControlEnabled!: pulumi.Output<boolean>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The status of the last provisioning operation performed on the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a CopilotSetting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CopilotSettingArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accessControlEnabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessControlEnabled'");
            }
            resourceInputs["accessControlEnabled"] = args ? args.accessControlEnabled : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["accessControlEnabled"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:portalservices/v20240401:CopilotSetting" }, { type: "azure-native:portalservices/v20240401preview:CopilotSetting" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CopilotSetting.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CopilotSetting resource.
 */
export interface CopilotSettingArgs {
    /**
     * Boolean indicating if role-based access control is enabled for copilot in this tenant.
     */
    accessControlEnabled: pulumi.Input<boolean>;
}