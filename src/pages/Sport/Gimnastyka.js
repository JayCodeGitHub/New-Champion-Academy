import React from "react"
import { graphql } from "gatsby"
import PageLayout from "../../Layouts/PageLayout"
import ContentLayout from "../../Layouts/ContentLeyuot"

const GimnastykaPage = ({ data }) => {
  return (
    <PageLayout>
      <ContentLayout data={data.datoCmsGymnastic} />
    </PageLayout>
  )
}

export const query = graphql`
  query {
    datoCmsGymnastic {
      content {
        ... on DatoCmsTitle {
          title
        }
        ... on DatoCmsParagraph {
          paragraph
        }
        ... on DatoCmsList {
          list
          listitem
        }
        ... on DatoCmsHeader {
          header
          button
          description
          href
          title
          photo {
            url
          }
        }
        ... on DatoCmsBelt {
          belt
          button
          description
          href
          title
        }
        ... on DatoCmsPhototitle {
          phototitle
          title
          photo {
            url
          }
        }
        ... on DatoCmsTile {
          tile
          title
          description
          photoone {
            url
          }
          photothree {
            url
          }
          phototwo {
            url
          }
        }
        ... on DatoCmsTitleprimary {
          titleprimary
          title
        }
        ... on DatoCmsPhoto {
          photo {
            url
          }
        }
      }
    }
  }
`

export default GimnastykaPage
