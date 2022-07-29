import { FunctionComponent, useEffect, useState, useMemo } from "react";
import type { WorkoutData } from "@/types";
import { Heading, Paragraph } from "@campgladiator/cgui-core.atoms.typography";
import { Icon } from '@campgladiator/cgui-core.atoms.icon'
interface IWorkout extends WorkoutData {
  elementIndex: number
}

enum Impacts {
  beginner = 1,
  intermediate = 3,
  advanced = 5
}


export const Workout: FunctionComponent<IWorkout> = ({
  description,
  duration,
  id,
  impactTag,
  levelTag,
  media,
  name,
  thumbnail,
  title,
  trainerId,
  elementIndex
}) => {
  const [teste, setTeste] = useState(false)
  function isOdd(num: number) { return num % 2;}

  const stars = useMemo(() => Array.from({length: Impacts[levelTag]}), [id])

  return (
      <div className={`col12 colSm6 colLg4 card-grid`}>
        <div className={`card cardBg-${elementIndex}`} onClick={() => setTeste(!teste)}>
          <div className={"card__info"}>
            <Heading type="h3" variation="default" font="gotham">
              {name}
            </Heading>
            <div className={"card__level-tag"}>
              {stars.map((_, index)=> {
                return (
                  <Icon.Solid name={"icon-dumbbell"} key={index} className={levelTag}/>
                )
              })}
            </div>
            <Paragraph size="large" weight="book">
              {title}
            </Paragraph>
          </div>
        </div>
      </div>
  )
}
