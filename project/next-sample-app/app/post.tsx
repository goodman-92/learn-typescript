import {GetStaticProps, InferGetStaticPropsType} from "next";
import {string} from "prop-types";

type PostProps = {
  id: string,
  text: string,
  title: string
}

function Post(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      {props.id.toUpperCase()}
    </div>
  )
}

// origin
export const getStaticProps2: GetStaticProps = () => {
  return {
    props: {}
  }
}

export const getStaticProps = () => {
  return {
    props: {
      id: '12'
    }
  } satisfies { props: { id: string} }
}