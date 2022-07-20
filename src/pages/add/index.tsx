import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Script } from "types/IOperadora";
import uniqid from "uniqid";
import { Seletor } from "@/components/seletor";
import styles from './Add.module.scss'
import { AddFormulario } from "./addFormulario";
import { ScriptMenuLateral } from "@/components/menu/menuLateral/left/script";

export function Add() {
    const configPage = ScriptMenuLateral.map((script: { configPage: any; }) => script.configPage)
    const config = configPage[0]
    
    return( 
        <section className={styles.AddPage}>
            <div className={styles.AddPage__container}>
                <Seletor  config={config} />
                <Outlet />
            </div> 

        </section>
    )
}