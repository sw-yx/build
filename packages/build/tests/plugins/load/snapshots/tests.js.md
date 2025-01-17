# Snapshot report for `packages/build/tests/plugins/load/tests.js`

The actual snapshot is saved in `tests.js.snap`.

Generated by [AVA](https://ava.li).

## Install missing plugins

> Snapshot 1

    `␊
    > Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    > Loading plugins␊
    ␊
    ┌─────────────────────────────┐␊
    │        Build failed         │␊
    └─────────────────────────────┘␊
    ␊
    > Error message␊
      Error: Plugin must be an object or a function␊
    ␊
    > Plugin details␊
      ID:             yn␊
      Version:        1.0.0␊
      Repository:     git+https://github.com/sindresorhus/yn.git␊
      npm link:       https://www.npmjs.com/package/yn␊
      Report issues:  https://github.com/sindresorhus/yn/issues␊
    ␊
    > Error location␊
      While loading npm package "yn"␊
    `

## Local plugins

> Snapshot 1

    `␊
    > Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    > Loading plugins␊
       - @netlify/plugin-functions-core from build core␊
       - @netlify/plugin-cache-core from build core␊
       - /file/path␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 4 commands. Lets do this!␊
    ␊
    ┌─────────────────────────────────────────┐␊
    │ 1. Running onInit command from /file/path │␊
    └─────────────────────────────────────────┘␊
    ␊
    test␊
    ␊
     √  /file/path onInit completed in 1ms␊
    ␊
    ┌───────────────────────────────────────────────────────────────────┐␊
    │ 2. Running onPreBuild command from @netlify/plugin-functions-core │␊
    └───────────────────────────────────────────────────────────────────┘␊
    ␊
    ␊
     √  @netlify/plugin-functions-core onPreBuild completed in 1ms␊
    ␊
    ┌────────────────────────────────────────────────────────────────────┐␊
    │ 3. Running onPostBuild command from @netlify/plugin-functions-core │␊
    └────────────────────────────────────────────────────────────────────┘␊
    ␊
    ␊
     √  @netlify/plugin-functions-core onPostBuild completed in 1ms␊
    ␊
    ┌────────────────────────────────────────────────────────────────┐␊
    │ 4. Running onPostBuild command from @netlify/plugin-cache-core │␊
    └────────────────────────────────────────────────────────────────┘␊
    ␊
    > Caching artifacts␊
    ␊
     √  @netlify/plugin-cache-core onPostBuild completed in 1ms␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    Have a nice day!␊
    `

## Node module plugins

> Snapshot 1

    `␊
    > Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    > Loading plugins␊
       - @netlify/plugin-functions-core from build core␊
       - @netlify/plugin-cache-core from build core␊
       - netlify-plugin-test@1.0.0␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 4 commands. Lets do this!␊
    ␊
    ┌────────────────────────────────────────────────────┐␊
    │ 1. Running onInit command from netlify-plugin-test │␊
    └────────────────────────────────────────────────────┘␊
    ␊
    test␊
    ␊
     √  netlify-plugin-test onInit completed in 1ms␊
    ␊
    ┌───────────────────────────────────────────────────────────────────┐␊
    │ 2. Running onPreBuild command from @netlify/plugin-functions-core │␊
    └───────────────────────────────────────────────────────────────────┘␊
    ␊
    ␊
     √  @netlify/plugin-functions-core onPreBuild completed in 1ms␊
    ␊
    ┌────────────────────────────────────────────────────────────────────┐␊
    │ 3. Running onPostBuild command from @netlify/plugin-functions-core │␊
    └────────────────────────────────────────────────────────────────────┘␊
    ␊
    ␊
     √  @netlify/plugin-functions-core onPostBuild completed in 1ms␊
    ␊
    ┌────────────────────────────────────────────────────────────────┐␊
    │ 4. Running onPostBuild command from @netlify/plugin-cache-core │␊
    └────────────────────────────────────────────────────────────────┘␊
    ␊
    > Caching artifacts␊
    ␊
     √  @netlify/plugin-cache-core onPostBuild completed in 1ms␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    Have a nice day!␊
    `
