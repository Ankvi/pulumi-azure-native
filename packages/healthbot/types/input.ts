import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The properties of a Azure Health Bot. The Health Bot Service is a cloud platform that empowers developers in Healthcare organizations to build and deploy their compliant, AI-powered virtual health assistants and health bots, that help them improve processes and reduce costs.
 */
export interface HealthBotPropertiesArgs {
    /**
     * KeyVault properties for the resource encryption.
     */
    keyVaultProperties?: pulumi.Input<KeyVaultPropertiesArgs>;
}

/**
 * Identity for the resource.
 */
export interface IdentityArgs {
    /**
     * The identity type. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the Azure Health Bot
     */
    type?: pulumi.Input<enums.ResourceIdentityType>;
    /**
     * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:
     * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Properties of the key vault.
 */
export interface KeyVaultPropertiesArgs {
    /**
     * The name of the key vault key.
     */
    keyName: pulumi.Input<string>;
    /**
     * The Uri of the key vault.
     */
    keyVaultUri: pulumi.Input<string>;
    /**
     * The version of the key vault key.
     */
    keyVersion?: pulumi.Input<string>;
    /**
     * The user assigned identity (ARM resource id) that has access to the key.
     */
    userIdentity?: pulumi.Input<string>;
}

/**
 * The resource model definition representing SKU
 */
export interface SkuArgs {
    /**
     * The name of the Azure Health Bot SKU
     */
    name: pulumi.Input<enums.SkuName>;
}


