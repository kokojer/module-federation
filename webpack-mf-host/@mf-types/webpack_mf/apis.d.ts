
    export type RemoteKeys = 'webpack_mf/app' | 'webpack_mf/button2';
    type PackageType<T> = T extends 'webpack_mf/button2' ? typeof import('webpack_mf/button2') :T extends 'webpack_mf/app' ? typeof import('webpack_mf/app') :any;