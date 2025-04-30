import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import './Planet.css'

export function Planet(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/house.gltf')
  const { actions } = useAnimations(animations, group)

  // ROTACION: hacer que el grupo rote
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.003 // velocidad de rotacion
    }
  })

  return (
    <group  ref={group} {...props} dispose={null} scale={[1.5, 1.5, 1.5]}
>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-1.54, -0.064, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Clouds_1">
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.Clouds} />
              </group>
              <group name="Planet_2">
                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.Planet} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/house.gltf')
