import { Search } from "lucide-react";
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import a from '/Group 17.png'
import b from '/Group 20.png'
import c from '/Rectangle Copy 3.png'
import d from '/Rectangle Copy 3 (1).png'
import _1 from '/Rectangle.png'
import _2 from '/Rectangle-1.png'
import _3 from '/Rectangle-2.png'
import _4 from '/Rectangle-3.png'
import _5 from '/Rectangle-4.png'
import _6 from '/Rectangle-5.png'
import _7 from '/Rectangle-6.png'
import _8 from '/Rectangle-7.png'
import _9 from '/Rectangle-8.png'
import _10 from '/Rectangle-9.png'
import _11 from '/Rectangle-10.png'
import _12 from '/Rectangle-11.png'
import _13 from '/Rectangle-12.png'
import _14 from '/Rectangle-13.png'
import _15 from '/Rectangle-14.png'
import _16 from '/Rectangle-15.png'
import _17 from '/Rectangle-16.png'
import _18 from '/Rectangle-17.png'
import _19 from '/Rectangle-18.png'
import _20 from '/Rectangle-19.png'
import _21 from '/Rectangle-20.png'
import _22 from '/Rectangle-21.png'
import _23 from '/Rectangle-22.png'
import _24 from '/Rectangle-23.png'

const HomeView = () => {
  return (
    <>
      <div className="flex g-10 items-center">
        <Search color="white" />
        <input className="ml-2 input" type="text" placeholder="Search for movies" /> <br />
      </div>
      <div>

        <h1 className="text-white text-[32px] font-normal leading-10 tracking-[-0.5px] text-left pb-8">
          Trending
        </h1>
        <Carousel
          opts={{
            align: "start",
          }}
          className="max-w-6xl ml-10"
        >
          <CarouselContent className="">
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div>
                <Card>
                  <CardContent className="bc10141E p-0 flex aspect-square items-center justify-center">
                    <img className="" src={a} alt="" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="bc10141E p-0 flex aspect-square items-center justify-center">
                    <img className="" src={b} alt="" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="bc10141E p-0 flex aspect-square items-center justify-center">
                    <img className="w-96" src={c} alt="" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="bc10141E p-0 flex aspect-square items-center justify-center">
                    <img className="w-96" src={d} alt="" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="text-white gap-10 p-10">
        <h1 className="text-white text-[32px] font-normal leading-10 tracking-[-0.5px] text-left pb-8">Recommended for you</h1>
        <div className="flex gap-20 items-center">
          <div className="">
            <img src={_1} alt="" />
            <p>2019 Movie PG</p>
            <h5>The Great Lands</h5>
          </div>
          <div className="">
            <img src={_2} alt="" />
            <p>2019 TV Series PG</p>
            <h5>The Diary</h5>
          </div>
          <div className="">
            <img src={_3} alt="" />
            <p>2017 Movie 18+</p>
            <h5>Earth’s Untouched</h5>
          </div>
          <div className="">
            <img src={_4} alt="" />
            <p>2019 Movie E</p>
            <h5>No Land Beyond</h5>
          </div>
        </div>
        <div className="flex gap-20 items-center">
          <div className="">
            <img src={_5} alt="" />
            <p>2016 TV Series PG</p>
            <h5>During The Hunt</h5>
          </div>
          <div className="">
            <img src={_6} alt="" />
            <p>2017 Movie E</p>
            <h5>Autosport The Series</h5>
          </div>
          <div className="">
            <img src={_7} alt="" />
            <p>2016 TV Series PG</p>
            <h5>Same Answer II</h5>
          </div>
          <div className="">
            <img src={_8} alt="" />
            <p>2016 TV Series PG</p>
            <h5>Below Echo</h5>
          </div>
        </div>
        <div className="flex gap-20 items-center">
          <div className="">
            <img src={_9} alt="" />
            <p>2015 TV Series E</p>
            <h5>The Rockies</h5>
          </div>
          <div className="">
            <img src={_10} alt="" />
            <p>2017
              Movie
              PG</p>
            <h5>Relentless</h5>
          </div>
          <div className="">
            <img src={_11} alt="" />
            <p>2018
              TV Series
              18+</p>
            <h5>Community of Ours</h5>
          </div>
          <div className="">
            <img src={_12} alt="" />
            <p>2015
              Movie
              PG</p>
            <h5>Van Life</h5>
          </div>
        </div>
        <div className="flex gap-20 items-center">
          <div className="">
            <img src={_13} alt="" />
            <p>2021
              Movie
              PG</p>
            <h5>The Heiress</h5>
          </div>
          <div className="">
            <img src={_14} alt="" />
            <p>2017
              Movie
              18+</p>
            <h5>Off the Track</h5>
          </div>
          <div className="">
            <img src={_15} alt="" />
            <p>2017
              Movie
              E</p>
            <h5>Whispering Hill</h5>
          </div>
          <div className="">
            <img src={_16} alt="" />
            <p>2013
              TV Series
              PG</p>
            <h5>112</h5>
          </div>
        </div>
        <div className="flex gap-20 items-center">
          <div className="">
            <img src={_17} alt="" />
            <p>2017
              Movie
              E</p>
            <h5>Lone Heart</h5>
          </div>
          <div className="">
            <img src={_18} alt="" />
            <p>2018
              TV Series
              PG</p>
            <h5>Production Line</h5>
          </div>
          <div className="">
            <img src={_19} alt="" />
            <p>2016
              TV Series
              E</p>
            <h5>Dogs</h5>
          </div>
          <div className="">
            <img src={_20} alt="" />
            <p>2020
              TV Series
              PG</p>
            <h5>Asia in 24 Days</h5>
          </div>
        </div>
        <div className="flex gap-20 items-center">
          <div className="">
            <img src={_21} alt="" />
            <p>2016
              TV Series
              PG</p>
            <h5>The Tasty Tour</h5>
          </div>
          <div className="">
            <img src={_22} alt="" />
            <p>2017
              Movie
              18+</p>
            <h5>Darker</h5>
          </div>
          <div className="">
            <img src={_23} alt="" />
            <p>2018
              TV Series
              18+</p>
            <h5>Unresolved Cases</h5>
          </div>
          <div className="">
            <img src={_24} alt="" />
            <p>2017
              Movie
              PG</p>
            <h5>Mission: Saturn</h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeView;