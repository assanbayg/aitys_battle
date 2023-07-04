import Character from "../../components/aitys/Character";
import CourtroomScene from "../../components/aitys/CourtroomScene";

export default function Dialogue() {
  const character1 = <Character name="Mudkip" image="/character1.png" />;
  const character2 = <Character name="Magnemite" image="/character2.png" />;

  const replies = [
    {
      character1: (
        <>
          Revolution, a topic so grand
          <br />
          A tale of change, a new command
          <br />
          But let me weave a different rhyme
          <br />
          To persuade you, my partner, in poetic time
        </>
      ),
      character2: (
        <>
          Revolution, a word so bold
          <br />
          A change of power, a story untold
          <br />
          But let me add my own refrain
          <br />
          To this poetic dialogue we entertain
        </>
      ),
    },
    {
      character1: (
        <>
          Revolution, a call to arms
          <br />
          A chance to change, to break the norms
          <br />
          To fight for what we believe in
          <br />
          And make our voices heard like the wind
        </>
      ),
      character2: (
        <>
          Revolution, a time of change
          <br />
          A chance to rearrange and exchange
          <br />
          The old for the new, the weak for the strong
          <br />
          And make our mark like a beautiful song
        </>
      ),
    },
    {
      character1: (
        <>
          Revolution, a path unknown
          <br />
          A journey that`s not for the faint of bone
          <br />
          But let us not forget the power we hold
          <br />
          To make a difference and be bold
        </>
      ),
      character2: (
        <>
          Revolution, a chance to shine
          <br />
          To stand up tall and draw the line
          <br />
          To fight for what we know is right
          <br />
          And make our voices heard with all our might
        </>
      ),
    },
    {
      character1: (
        <>
          Revolution, a call to arms
          <br />
          A chance to change, to break the norms
          <br />
          To fight for what we believe in
          <br />
          And make our voices heard like the wind
        </>
      ),
      character2: (
        <>
          Revolution, a time of change
          <br />
          A chance to rearrange and exchange
          <br />
          The old for the new, the weak for the strong
          <br />
          And make our mark like a beautiful song
        </>
      ),
    },
  ];

  return (
    <CourtroomScene
      character1={character1}
      character2={character2}
      replies={replies}
    />
  );
}
