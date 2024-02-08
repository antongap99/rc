
export type BuildMode = 'development' | 'production'

export interface BuildPaths {
    entry: string, // entry point ts
    build: string, // path to dist dir
    html: string, // path to template
}
export interface BuildOptions {
    mode: BuildMode,
    paths: BuildPaths
    isDev: boolean,
    port: number,
}

export interface BuildEnv {
    mode: BuildMode,
    port: number
}