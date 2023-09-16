import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * NamedValue details.
 * Azure REST API version: 2022-08-01. Prior API version in Azure Native 1.x: 2020-12-01
 */
export class NamedValue extends pulumi.CustomResource {
    /**
     * Get an existing NamedValue resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NamedValue {
        return new NamedValue(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement:NamedValue';

    /**
     * Returns true if the given object is an instance of NamedValue.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NamedValue {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NamedValue.__pulumiType;
    }

    /**
     * Unique name of NamedValue. It may contain only letters, digits, period, dash, and underscore characters.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * KeyVault location details of the namedValue.
     */
    public readonly keyVault!: pulumi.Output<types.outputs.apimanagement.KeyVaultContractPropertiesResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Determines whether the value is a secret and should be encrypted or not. Default value is false.
     */
    public readonly secret!: pulumi.Output<boolean | undefined>;
    /**
     * Optional tags that when provided can be used to filter the NamedValue list.
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Value of the NamedValue. Can contain policy expressions. It may not be empty or consist only of whitespace. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
     */
    public readonly value!: pulumi.Output<string | undefined>;

    /**
     * Create a NamedValue resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NamedValueArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["keyVault"] = args ? args.keyVault : undefined;
            resourceInputs["namedValueId"] = args ? args.namedValueId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["secret"] = args ? args.secret : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["value"] = args ? args.value : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["keyVault"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["secret"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["value"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20191201:NamedValue" }, { type: "azure-native:apimanagement/v20191201preview:NamedValue" }, { type: "azure-native:apimanagement/v20200601preview:NamedValue" }, { type: "azure-native:apimanagement/v20201201:NamedValue" }, { type: "azure-native:apimanagement/v20210101preview:NamedValue" }, { type: "azure-native:apimanagement/v20210401preview:NamedValue" }, { type: "azure-native:apimanagement/v20210801:NamedValue" }, { type: "azure-native:apimanagement/v20211201preview:NamedValue" }, { type: "azure-native:apimanagement/v20220401preview:NamedValue" }, { type: "azure-native:apimanagement/v20220801:NamedValue" }, { type: "azure-native:apimanagement/v20220901preview:NamedValue" }, { type: "azure-native:apimanagement/v20230301preview:NamedValue" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NamedValue.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NamedValue resource.
 */
export interface NamedValueArgs {
    /**
     * Unique name of NamedValue. It may contain only letters, digits, period, dash, and underscore characters.
     */
    displayName: pulumi.Input<string>;
    /**
     * KeyVault location details of the namedValue.
     */
    keyVault?: pulumi.Input<types.inputs.apimanagement.KeyVaultContractCreatePropertiesArgs>;
    /**
     * Identifier of the NamedValue.
     */
    namedValueId?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Determines whether the value is a secret and should be encrypted or not. Default value is false.
     */
    secret?: pulumi.Input<boolean>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Optional tags that when provided can be used to filter the NamedValue list.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Value of the NamedValue. Can contain policy expressions. It may not be empty or consist only of whitespace. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
     */
    value?: pulumi.Input<string>;
}
