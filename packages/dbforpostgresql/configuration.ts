import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a Configuration.
 * Azure REST API version: 2022-12-01. Prior API version in Azure Native 1.x: 2017-12-01.
 *
 * Other available API versions: 2017-12-01, 2023-03-01-preview.
 */
export class Configuration extends pulumi.CustomResource {
    /**
     * Get an existing Configuration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Configuration {
        return new Configuration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:dbforpostgresql:Configuration';

    /**
     * Returns true if the given object is an instance of Configuration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Configuration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Configuration.__pulumiType;
    }

    /**
     * Allowed values of the configuration.
     */
    public /*out*/ readonly allowedValues!: pulumi.Output<string>;
    /**
     * Data type of the configuration.
     */
    public /*out*/ readonly dataType!: pulumi.Output<string>;
    /**
     * Default value of the configuration.
     */
    public /*out*/ readonly defaultValue!: pulumi.Output<string>;
    /**
     * Description of the configuration.
     */
    public /*out*/ readonly description!: pulumi.Output<string>;
    /**
     * Configuration documentation link.
     */
    public /*out*/ readonly documentationLink!: pulumi.Output<string>;
    /**
     * Configuration is pending restart or not.
     */
    public /*out*/ readonly isConfigPendingRestart!: pulumi.Output<boolean>;
    /**
     * Configuration dynamic or static.
     */
    public /*out*/ readonly isDynamicConfig!: pulumi.Output<boolean>;
    /**
     * Configuration read-only or not.
     */
    public /*out*/ readonly isReadOnly!: pulumi.Output<boolean>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Source of the configuration.
     */
    public readonly source!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Configuration unit.
     */
    public /*out*/ readonly unit!: pulumi.Output<string>;
    /**
     * Value of the configuration.
     */
    public readonly value!: pulumi.Output<string | undefined>;

    /**
     * Create a Configuration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConfigurationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            resourceInputs["configurationName"] = args ? args.configurationName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
            resourceInputs["value"] = args ? args.value : undefined;
            resourceInputs["allowedValues"] = undefined /*out*/;
            resourceInputs["dataType"] = undefined /*out*/;
            resourceInputs["defaultValue"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["documentationLink"] = undefined /*out*/;
            resourceInputs["isConfigPendingRestart"] = undefined /*out*/;
            resourceInputs["isDynamicConfig"] = undefined /*out*/;
            resourceInputs["isReadOnly"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["unit"] = undefined /*out*/;
        } else {
            resourceInputs["allowedValues"] = undefined /*out*/;
            resourceInputs["dataType"] = undefined /*out*/;
            resourceInputs["defaultValue"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["documentationLink"] = undefined /*out*/;
            resourceInputs["isConfigPendingRestart"] = undefined /*out*/;
            resourceInputs["isDynamicConfig"] = undefined /*out*/;
            resourceInputs["isReadOnly"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["source"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["unit"] = undefined /*out*/;
            resourceInputs["value"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:dbforpostgresql/v20200214preview:Configuration" }, { type: "azure-native:dbforpostgresql/v20200214privatepreview:Configuration" }, { type: "azure-native:dbforpostgresql/v20210410privatepreview:Configuration" }, { type: "azure-native:dbforpostgresql/v20210601:Configuration" }, { type: "azure-native:dbforpostgresql/v20210601preview:Configuration" }, { type: "azure-native:dbforpostgresql/v20210615privatepreview:Configuration" }, { type: "azure-native:dbforpostgresql/v20220120preview:Configuration" }, { type: "azure-native:dbforpostgresql/v20220308preview:Configuration" }, { type: "azure-native:dbforpostgresql/v20221201:Configuration" }, { type: "azure-native:dbforpostgresql/v20230301preview:Configuration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Configuration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Configuration resource.
 */
export interface ConfigurationArgs {
    /**
     * The name of the server configuration.
     */
    configurationName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
    /**
     * Source of the configuration.
     */
    source?: pulumi.Input<string>;
    /**
     * Value of the configuration.
     */
    value?: pulumi.Input<string>;
}
