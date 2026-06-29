import Title from "../atoms/title";
import ParallaxBox from "../layout/parallaxBox";
import Section, { SectionContent } from "../layout/section";
import { SequenceItem } from "../layout/sequenceItem";

export default function PresentationSection() {
  return (
    <Section id="presentation">
      <SectionContent className="flex gap-12">
        <div className="grid grid-cols-15 grid-rows-10 size-full">
          <SequenceItem
            index={0}
            className="col-start-6 col-end-9 row-start-4 row-end-8 size-full flex items-center justify-center"
          >
            <ParallaxBox className=" rounded-full w-full aspect-square shadow-2xl shadow-primary/40">
              <img
                className="size-full rounded-full mx-auto object-cover"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop"
                alt="Avatar"
              />
            </ParallaxBox>
          </SequenceItem>
          <SequenceItem
            index={1}
            className="col-start-1 col-end-6 row-start-1 row-end-4 size-full flex items-center justify-center"
          >
            <div className=" size-full rounded-lg">
              <p>
                Ad aute do sint in mollit pariatur exercitation qui ex laborum. Cupidatat Lorem
                culpa occaecat proident proident enim. Ea proident do esse nostrud labore. Occaecat
                laborum occaecat qui velit consectetur magna. Sunt culpa ea qui reprehenderit.
                Aliquip culpa nisi labore qui sint labore fugiat velit ea. Anim aute esse sit
                reprehenderit occaecat. Ea proident do esse nostrud labore. Occaecat laborum
                occaecat qui velit consectetur magna.
              </p>
            </div>
          </SequenceItem>
          <SequenceItem
            index={2}
            className="col-start-2 col-end-5 row-start-7 row-end-10 size-full flex items-center justify-center"
          >
            <div className=" size-full rounded-lg">
              Officia dolor sint aliqua nulla ex nisi cupidatat anim sit voluptate ullamco
              incididunt elit id. Eiusmod ipsum ut culpa deserunt aliquip laboris in ex velit est.
              In amet mollit laboris commodo cillum ea. In amet mollit laboris commodo cillum ea.
            </div>
          </SequenceItem>

          <SequenceItem
            index={3}
            className="col-start-10 col-end-16 row-start-2 row-end-5 size-full flex items-center justify-center"
          >
            <div className=" size-full rounded-lg">
              Sint ea nostrud tempor deserunt et esse do anim laboris eiusmod. Quis magna esse
              reprehenderit labore ipsum. Qui quis exercitation quis consectetur incididunt ex magna
              deserunt ut id laboris ad non elit. Fugiat Lorem adipisicing dolor dolore consequat
              dolor culpa. Minim irure fugiat proident nulla culpa nisi magna in duis enim ullamco
              dolore velit. Enim ipsum consequat consequat mollit quis ut velit enim ut laborum in
              veniam sunt. Incididunt veniam adipisicing nostrud magna proident. Enim esse voluptate
              laborum consectetur. Qui minim aliquip sunt in tempor sunt.
            </div>
          </SequenceItem>
          <SequenceItem
            index={4}
            className="col-start-9 col-end-16 row-start-8 row-end-11 size-full flex items-center justify-center"
          >
            <div className=" size-full rounded-lg">
              Exercitation fugiat tempor ad nostrud commodo deserunt excepteur. Qui dolor duis
              eiusmod magna ullamco cillum amet ad occaecat irure duis ad cupidatat. Dolor quis sunt
              ullamco quis nostrud magna est id.Elit non in proident pariatur ut non anim enim elit
              aliquip id officia velit. Amet non veniam reprehenderit ipsum laboris ipsum ullamco
              amet. Deserunt qui sunt tempor voluptate esse anim non laboris aute consectetur. Ipsum
              excepteur non deserunt ad aliquip minim dolore ea et et. Sunt enim duis enim qui
              consequat consequat.Id voluptate Lorem ex sunt aliqua culpa ipsum est irure deserunt
              amet Lorem. Esse id deserunt aliquip laborum. In laborum ipsum ea cillum.
            </div>
          </SequenceItem>
        </div>
      </SectionContent>
      <Title>Me</Title>
    </Section>
  );
}
