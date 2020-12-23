import React from 'react'
import {Layout, SEO, CartContents} from 'components'

export default function Cart(){
    return (
        <Layout>
            <SEO description="HatsAlley cart page" title="HatsAlley Cart" />
            <CartContents />
        </Layout>
    )
}
