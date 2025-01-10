# Pulumi Azure Native subpackages

The project splits the [Pulumi Azure Native](https://github.com/pulumi/pulumi-azure-native)
npm package into smaller, more manageable packages that won't break your TypeScript
server because of too high memory usage.

This project will not cover bugs that should be solved by Pulumi, but if there's
anything wrong with the output, feel free to raise an issue so it can be fixed as
I do not have the capacity to test out all of the features, only the ones my
team uses.

## Usage

Start by adding the [core](./packages/core) package as well as any other modules you require to your
pulumi project and remove the `@pulumi/azure-native` dependency

Using `npm`:

```bash
npm uninstall @pulumi/azure-native
npm install @kengachu-pulumi/azure-native-core
npm install @kengachu-pulumi/azure-native-documentdb
```

Now we can replace the import statements from our Pulumi script:

```typescript
import { CustomResourceOptions } from "@pulumi/pulumi";
//import { Provider } from "@pulumi/azure-native";
import { Provider } from "@kengachu-pulumi/azure-native-core";

// import { DatabaseAccount, SqlResourceSqlDatabase } from "@pulumi/azure-native/documentdb";
import { DatabaseAccount, SqlResourceSqlDatabase } from "@kengachu-pulumi/azure-native-documentdb";

const options: CustomResourceOptions = {
    provider: new Provider("azure-native-provider", {
        // your options
    })
}

const databaseAccount = new DatabaseAccount(
    "database-account-name", {
        // your options
    },
    options
);

const database = new SqlResourceSqlDatabase(
    "cosmosdb-database",
    {
        accountName: databaseAccount.name,
        // your other options
    },
    options
)
```

And that's it! All configuration should be exactly the same. The only required changes are
the import statements
