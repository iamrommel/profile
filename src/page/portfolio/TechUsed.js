import * as React from 'react'

const Image = ({ name, title }) => {
    return <img src={require(`./logo/${name}.png`)} title={title} alt={title} className=" p-3 img-fluid"/>
}

export let TechUsed = () => {
    return (
        <div className="">
            <Image name="apollo" title="ApolloGraphql: Do GraphQL Right"/>
            <Image name="caprover" title="CapRover: Build your own PaaS in a few minutes!"/>
            <Image name="do"
                   title="DigitalOcean: Helping millions of developers easily build, test, manage, and scale applications of any size – faster than ever before."/>
            <Image name="expoio" title="Expo: The fastest way to build an app"/>
            <Image name="express"
                   title="Express: Express.js: the fast, unopinionated, minimalist web framework for node"/>
            <Image name="graphql"
                   title="Graphql: a query language for APIs and a runtime for fulfilling those queries with your existing data."/>
            <Image name="mongodb" title="MongoDB: The most popular database for modern apps"/>
            <Image name="nativebase" title="NativeBase: Essential cross-platform UI components for React Native"/>
            <Image name="nodejs" title="Node.js: is a JavaScript runtime built on Chrome's V8 JavaScript engine."/>
            <Image name="npm" title="npm: build amazing things"/>
            <Image name="reactjs" title="React: A JavaScript library for building user interfaces"/>
            <Image name="reactnative" title="React Native: A framework for building native apps using React"/>
            <Image name="android" title="Android: The World's Most Popular Mobile Platform"/>
            <Image name="ios"
                   title="iOS (formerly iPhone OS): a mobile operating system created and developed by Apple Inc. "/>
            <Image name="docker"
                   title="DOcker is a set of platform-as-a-service products that use OS-level virtualization to deliver software in packages called containers"/>
        </div>
    )

}


